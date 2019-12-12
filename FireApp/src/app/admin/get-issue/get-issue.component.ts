import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from '../../Services/detail.service';

@Component({
  selector: 'app-get-issue',
  templateUrl: './get-issue.component.html',
  styleUrls: ['./get-issue.component.css']
})
export class GetIssueComponent implements OnInit {

  public detaillist = [] 
  constructor(public detailServ:DetailService, private router:Router) { }

  ngOnInit() {
    this.detailServ.getIssue().subscribe(data=>this.detaillist=data)
  }

}
