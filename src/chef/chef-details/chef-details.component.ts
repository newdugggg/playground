import { Component, OnInit } from '@angular/core';
import { AboutusService } from 'src/app/about-us/aboutus.service';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrls: ['./chef-details.component.scss']
})
export class ChefDetailsComponent implements OnInit {

  constructor(private aboutusService : AboutusService,){}

  ngOnInit(): void {
    console.log(this.aboutusService.getData());


  }

}
