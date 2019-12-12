import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public id;
  public submit
  constructor() { }

  ngOnInit() {
    this.id = localStorage.getItem("id");
    this.submit = localStorage.getItem("submit");
  }

}
