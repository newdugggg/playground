import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
    this.rolNumberSub$ = this.aboutus.cart.subscribe((data) => {
      this.rolNumber = data;
    });
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

  logout() {
    sessionStorage.clear();
  }

  login() {
    sessionStorage.setItem(
      'authorization',
      'eyJ0eXAiOiJKV1QiLCJub25jZSI6ImluY1A5RFFGV185WHdmSUZvaTJoWFNvU2U4eXk3VkNfZGc3UGI1cG9vTWciLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzgwNDlkNGVmLTA0NWItNDUwNS04NzQ1LTdiY2EzYTU2OTFhMy8iLCJpYXQiOjE2NDQ5ODQ0NzUsIm5iZiI6MTY0NDk4NDQ3NSwiZXhwIjoxNjQ0OTg5Mjc3LCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVVRQXUvOFRBQUFBZzVqTGU0SUdqdFNPc01qSkdHdVZMRVVEaVRrRGt5dmRqKzFUQ2pwclBtWk5UZ0svUTYwdlI0dE1POEJQTitoUHdFcytrSGt3anlna0VBaWd0ZittdEE9PSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT2ZmaWNlIDM2NSBFeGNoYW5nZSBPbmxpbmUiLCJhcHBpZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsImFwcGlkYWNyIjoiMiIsImF1dGhfdGltZSI6MTY0MTg3NDE1MCwiZGV2aWNlaWQiOiI0NzdhZDNiMS0xZGVhLTQyZjAtYWNiMC0xMGU4MGQ3MmI5ZDAiLCJlbmZwb2xpZHMiOltdLCJmYW1pbHlfbmFtZSI6IlZpc2hudSIsImdpdmVuX25hbWUiOiJBbmllc2giLCJpcGFkZHIiOiIxNTcuNDYuMTA5LjI4IiwibmFtZSI6IkFuaWVzaCBWaXNobnUiLCJvaWQiOiI3MTVmYmQzMS00YWU5LTQwMDMtODU4Ny1mZTYwMWIzNGU1ZjIiLCJwdWlkIjoiMTAwMzIwMDFDOEFGRDA2NiIsInJoIjoiMC5BVk1BNzlSSmdGc0VCVVdIUlh2S09sYVJvd0lBQUFBQUFQRVB6Z0FBQUFBQUFBQlRBQ3MuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWRXcml0ZSBEV0VuZ2luZS1JbnRlcm5hbC5SZWFkIEVBUy5BY2Nlc3NBc1VzZXIuQWxsIEZpbGVzLlJlYWQgRmlsZXMuUmVhZFdyaXRlIEZpbGVzLlJlYWRXcml0ZS5BbGwgRmlsZXMuUmVhZFdyaXRlLlNoYXJlZCBMb2NhdGlvbnMtSW50ZXJuYWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgTm90ZXMuUmVhZFdyaXRlIE5vdGVzLUludGVybmFsLlJlYWRXcml0ZSBPZmZpY2VGZWVkLUludGVybmFsLlJlYWRXcml0ZSBPV0EuQWNjZXNzQXNVc2VyLkFsbCBQZW9wbGVQcmVkaWN0aW9ucy1JbnRlcm5hbC5SZWFkIFByZW1pdW0tSW50ZXJuYWwuUmVhZFdyaXRlIFN1YnN0cmF0ZVNlYXJjaC1JbnRlcm5hbC5SZWFkV3JpdGUgVGFpbG9yZWRFeHBlcmllbmNlcy1JbnRlcm5hbC5SZWFkV3JpdGUgVG9kby1JbnRlcm5hbC5SZWFkV3JpdGUgVXNlci5SZWFkLkFsbCB1c2VyX2ltcGVyc29uYXRpb24iLCJzaWQiOiJkNGQzZDVjZS0xYzBhLTRiOTEtOTUwMy05MTFmNTliYjE2NmQiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvRjljSVlab2U5NDhPQzhWdmVRYndhTmxuT3YtSEdmWFZpOFpCaHZnbTJjIiwidGlkIjoiODA0OWQ0ZWYtMDQ1Yi00NTA1LTg3NDUtN2JjYTNhNTY5MWEzIiwidW5pcXVlX25hbWUiOiJhbmllc2gudmlzaG51QGthbHBpdGF0ZWNobm9sb2dpZXMuY29tIiwidXBuIjoiYW5pZXNoLnZpc2hudUBrYWxwaXRhdGVjaG5vbG9naWVzLmNvbSIsInV0aSI6IjdnRXlmdVRYc1VTbzlXclNsTlFXQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.xhMSgRdMg0Qe1xPwgJ3FxiXi1NmcQe_6gl-cVN9fZGe_E5KCb0lsXCmbe0Kg-Xi57Le8Ci87pBjEu-P2-H0mDrA6TTDj4zbdroSMLRMnmsGD50ii0MsEmEgT3rBRbrAY1U_XEUcDPTzBhsC2qgyOs3Cdq_PO6RbXQLpWketGEbXhzQ21ZdbRvPdzMws_YOAuEsEaFkkeXpWR99bdye-YfdgZvnr8uOA3GIvYmD78gDcQr0id1zhzV7KpYai3fnJ0ffuYBCAQcLSWo0FIvEOkZNWyGHykXEhfrk9amalYPV3QkJ2AVChktKk1Ja2-2Ld2cDxtNZ0XvlAihpibog'
    );
  }
}
