import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/Post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  public postId: number;
  public post: Post;
  constructor(public http: HttpClient, public route: ActivatedRoute) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.postId = id;

    this.http
      .get<Post>("https://jsonplaceholder.typicode.com/posts/" + this.postId)
      .subscribe(post => {
        this.post = post;
      });
  }
}
