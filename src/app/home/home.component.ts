import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/Post";
import { Image } from "../models/image";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public posts: Post[];
  public images: Image[];

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit() {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(posts => {
        this.posts = posts;
      });

    this.http
      .get<Image[]>("https://jsonplaceholder.typicode.com/photos")
      .subscribe(images => {
        this.images = images;
      });
  }

  postSelect(post: Post) {
    this.router.navigate(["/post", post.id]);
  }
}
