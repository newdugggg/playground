import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chef-form',
  templateUrl: './chef-form.component.html',
  styleUrls: ['./chef-form.component.scss'],
})
export class ChefFormComponent implements OnInit {
  info: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.reactiveForms();
    this.onSubmit();
  }

  onSubmit() {
    const data = {
      Age: this.info.get('age').value,
      emailAddress: this.info.controls['email'].value,
    };
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response: any) => {
        if (response) {
          this.reactiveForms();
        }
      },
      error: () => {},
    });
  }

  reactiveForms() {
    this.info = this.formBuilder.group({
      ageCheck: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      name: ['', [Validators.required, Validators.minLength(3)]], // maxLength
      age: ['', [Validators.min(18)]], // minLength
      country: ['', Validators.required],
    });
  }
  setValidatorsForAge() {
    if (this.info.controls['ageCheck'].value === 'yes') {
      this.info.controls['age'].setValidators([Validators.required]);
      this.info.patchValue({
        country: 'India',
        age: '25',
      });
    } else {
      // this.info.controls['age'].removeValidators([Validators.required]);
      this.info.controls['age'].clearValidators();
    }
  }
}
