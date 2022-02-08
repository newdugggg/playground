import { Component, OnInit } from '@angular/core';
import { AboutusService } from '../aboutus.service';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.scss'],
})
export class ChefInfoComponent implements OnInit {
  constructor(private aboutus: AboutusService) {}

  ngOnInit(): void {

  }
}
