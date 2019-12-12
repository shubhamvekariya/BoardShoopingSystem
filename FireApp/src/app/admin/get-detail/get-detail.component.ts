import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from '../../Services/detail.service';

@Component({
  selector: 'app-get-detail',
  templateUrl: './get-detail.component.html',
  styleUrls: ['./get-detail.component.css']
})
export class GetDetailComponent implements OnInit {

  public detaillist = [] 
  constructor(public detailServ:DetailService, private router:Router) { }

  ngOnInit() {
    this.detailServ.getDetail().subscribe(data=>this.detaillist=data)
  }
}
