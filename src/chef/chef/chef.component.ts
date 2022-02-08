import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AboutusService } from 'src/app/about-us/aboutus.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
})
export class ChefComponent implements OnInit {
  commentList: Comments[];
  postValue: Comments;
  constructor(private aboutUs: AboutusService) {}

  ngOnInit(): void {
    this.aboutUs.getComments().subscribe({
      next: (value: Comments[]) => {
        this.commentList = value.slice(0,10);
        this.aboutUs.postComments(value[0]).subscribe({
          next: (post: Comments) => {
            this.postValue = post;
          }
        })
      },
      error: (value) => console.log(value),
      complete: () => console.log('complete'),
    });
    //   const data = {
    //     id: 1,
    //     data: 'some thing',
    //   };
    //  .subscribe({
    //     next: (value) => console.log(value),
    //     error: (value) => console.log(value),
    //     complete: () => console.log('complete'),
    //   });
    //   this.http.put(environment.backendAPI + 'posts/1', data).subscribe({
    //     next: (value) => console.log(value),
    //     error: (value) => console.log(value),
    //     complete: () => console.log('complete'),
    //   });
    //   this.http.patch(environment.backendAPI + 'comments', '').subscribe({
    //     next: (value) => console.log(value),
    //     error: (value) => console.log(value),
    //     complete: () => console.log('complete'),
    //   });
    //   this.http.delete(environment.backendAPI + 'comments/kanye').subscribe({
    //     next: (value) => console.log(value),
    //     error: (value) => console.log(value),
    //     complete: () => console.log('complete'),
    //   });
  }
}

interface Comments {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
