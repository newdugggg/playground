import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AboutusService } from './about-us/aboutus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('name') input: ElementRef;
  title = 'playground';
  imgUrl = '../assets/clock-icon.png';
  enteredText = 'enter';
  dynVar: string = 'to';
  rolNumber: unknown;
  rolNumberSub$: any;
  // getValue(e?: any) {
  //   this.imgUrl = e.target.value;
    // console.log("keyup triggered")
  // }
  click() {
    // console.log('clicked');
  }
  // eventFromCU(e: any) {
    // console.log(e);
  // }

  ngOnInit() {
    // console.log('This is Oninit');
  }

  constructor(private route: Router, private aboutus: AboutusService) {
   this.rolNumberSub$ = this.aboutus.cart.subscribe((data)=> {
      this.rolNumber = data;
    })
    // console.log('This is constructor');
  }

  ngAfterViewInit() {
    // console.log('This is ngAfterViewInit');
        // console.log(this.input)
        // this.input.nativeElement.value = 'hi';

  }

  ngOnDestroy() {
    // console.log('This is ngOnDestroy');
    this.rolNumberSub$.unsubscribe();
  }

  nav() {
    // this.route.navigate(['/']);
    this.route.navigateByUrl('');
  }
}
