import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutusService } from 'src/app/about-us/aboutus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name;
  id;
  constructor(private route: Router, private aboutus :AboutusService) {}

  ngOnInit(): void {}

  nav() {
    this.route.navigate(['profile', this.id, this.name], {
      queryParams: { search: 'name' },
    });
    const data = 'search=ame';
    this.route.navigateByUrl(
      `profile/${this.id}/${this.name}?${decodeURI(data)}`
    );
  }

  getRol(data){
    this.aboutus.setRolData(data)
  }


}
