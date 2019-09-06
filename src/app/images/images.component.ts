import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Image } from "../models/image";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  images: Image[];
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Image[]>("https://jsonplaceholder.typicode.com/photos")
      .subscribe(images => {
        this.images = images;
      });
  }
}
