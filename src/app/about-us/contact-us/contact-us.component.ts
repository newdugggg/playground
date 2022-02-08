import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @Input() textData: string | undefined;
  @Input() src: string | undefined;
  @Output() clicked = new EventEmitter();
  dataList = [
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
    { id: '1', from: ' home', list: [{ place: 'LA' }] },
  ];
  // constructor( private service: ChefInfoService){}
  ngOnChanges() {
    // console.log('This is changes');

  }

  ngOnInit() {
    // console.log('This is Oninit');
    // console.log(this.service.data)
  }

  // constructor() {
  //   console.log('This is constructor');
  // }

  ngAfterViewInit() {
    // console.log('This is ngAfterViewInit');
  }

  ngOnDestroy() {
    // console.log('This is ngOnDestroy');
  }

  buttonClicked() {
    this.clicked.emit('any data can be emitted');
  }
}
