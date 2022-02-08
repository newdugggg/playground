import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutusService } from '../about-us/aboutus.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  url: string | undefined;
  id: string | null;
  name: string;
  rolNumber: unknown;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private aboutUs: AboutusService
  ) {}

  ngOnInit(): void {
    this.url = this.route.url;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');

    this.aboutUs.cart.subscribe({
      next: (data) => (this.rolNumber = data),
    });
  }
}
