import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from '../../Services/detail.service';

@Component({
  selector: 'app-get-payment-detail',
  templateUrl: './get-payment-detail.component.html',
  styleUrls: ['./get-payment-detail.component.css']
})
export class GetPaymentDetailComponent implements OnInit {
  public detaillist
  constructor(public detailServ:DetailService, private router:Router) { }

  ngOnInit() {
    this.detailServ.getPaymentDetail().subscribe(data=>this.detaillist=data)

  }

}
