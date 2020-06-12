import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-line-up",
  templateUrl: "./line-up.page.html",
  styleUrls: ["./line-up.page.scss"],
})
export class LineUpPage implements OnInit {
  characters = [];

  constructor() {}

  ngOnInit() {
    this.characters = ["test", "aaa", "bbb", "svb", "abc", "kjh"];
  }
}
