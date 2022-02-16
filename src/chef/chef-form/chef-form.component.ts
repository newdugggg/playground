import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpperCasePipe } from '../../app/shared/pipe/upper-case.pipe';
@Component({
  selector: 'app-chef-form',
  templateUrl: './chef-form.component.html',
  styleUrls: ['./chef-form.component.scss'],
})
export class ChefFormComponent implements OnInit {
  info: FormGroup;
  amount = 'upper case check';
  date = new Date().toISOString();
  currentTime = new Date();
  countryCode = [
    { countryName: '+91 India', value: '+91' },
    { countryName: '+1 USA', value: '+1' },
    { countryName: '+64  Canada', value: '+64' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    // private casePipe: UpperCasePipe,
    // private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.reactiveForms({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
    this.getData();
    // console.log(this.casePipe.transform('hi', 'up', this.date));
    // console.log(this.datePipe.transform(this.currentTime, 'HH mm ss'))
  }

  reactiveForms({
    name = 'Sean',
    username = '',
    email = '',
    phone = '',
    website = '',
  }: {
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
  }) {
    this.info = this.formBuilder.group({
      name: [name, Validators.required],
      email: [
        email,
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      username: [username, [Validators.required]], // maxLength
      phone: [phone, [Validators.required]],
      countryCode: ['+91'], // minLength
      website: [website, Validators.required],
      mobile: this.formBuilder.array([]),
    });
    this.addMobile();
  }
  onSubmit() {
    const {
      phone: id = '986-08-080',
      name: title,
      email: body,
      website: userId,
      countryCode,
    } = this.info.value;
    const data = {
      id: `${countryCode}-${id}`,
      title,
      body,
      userId,
    };
    this.http
      .put('https://jsonplaceholder.typicode.com/posts/1', data)
      .subscribe({
        next: () => {
          this.reactiveForms({
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
          });
        },
      });
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        this.reactiveForms(response[0]);
      },
    });
  }

  get mobile() {
    return this.info.controls['mobile'] as FormArray;
  }

  addMobile() {
    this.mobile.push(
      this.formBuilder.group({
        mobileNumber: ['', Validators.required],
        email: '',
      })
    );
  }

  removeNumber(i) {
    this.mobile.removeAt(i);
  }
}

// setValidatorsForAge() {
//   if (this.info.controls['ageCheck'].value === 'yes') {
//     this.info.controls['age'].setValidators([Validators.required]);
//     this.info.patchValue({
//       country: 'India',
//       age: '25',
//     });
//     this.info.controls['age'].setValue(54);
//   } else {
//     // this.info.controls['age'].removeValidators([Validators.required]);
//     this.info.controls['age'].clearValidators();
//   }
// }
