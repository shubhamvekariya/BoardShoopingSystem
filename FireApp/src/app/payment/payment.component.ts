import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DetailService } from '../Services/detail.service';
import { BoardsService } from '../Services/boards.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public id
  public cart
  public item
  DetailForm : FormGroup
  constructor(private ds: DetailService, private router1:Router, private router:ActivatedRoute) { }

  ngOnInit() {
    this.DetailForm = new FormGroup({
      email: new FormControl(),
      fname: new FormControl(),
      nameoncard: new FormControl(),
      cardno: new FormControl(),
      year: new FormControl(),
      month: new FormControl()
    })
    this.id =parseInt(this.router.snapshot.paramMap.get('id'));
    this.item = parseInt(this.router.snapshot.paramMap.get('item'));
  }
  addPayment( email, fname, nameoncard, cardno , edate) {
    this.ds.addPayment(email,fname,nameoncard , cardno, edate, this.id , this.item);
    localStorage.removeItem("id");
    localStorage.removeItem("submit");
    this.router1.navigate(['/']);
  }


}
