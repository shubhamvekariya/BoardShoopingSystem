import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';
import { DetailService } from '../Services/detail.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  DetailForm : FormGroup
  public id 
  public item
  constructor(private ds: DetailService, private router:Router, private router1:ActivatedRoute) { }

  ngOnInit() {
    this.DetailForm = new FormGroup({
      email: new FormControl(),
      fname: new FormControl(),
      lname: new FormControl(),
      pnumber: new FormControl(),
      flatno: new FormControl(),
      colony: new FormControl(),
      landmark: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl()
   });
   this.id=this.router1.snapshot.paramMap.get('id');
   this.item=this.router1.snapshot.paramMap.get('item');
  }
  addDetail( email, fname, lname, pnumber, address) {
    this.ds.addDetail(email,fname,lname,pnumber,address);
    this.router.navigate(['/PaymentDetail',this.id,this.item]);
  }
}
