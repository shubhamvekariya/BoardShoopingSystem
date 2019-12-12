import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';
import { DetailService } from '../Services/detail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  DetailForm : FormGroup
  constructor(private ds: DetailService, private router:Router) { }

  ngOnInit() {
    this.DetailForm = new FormGroup({
      email: new FormControl(),
      subject: new FormControl(),
      issue: new FormControl(),
      fname: new FormControl(),
      pnumber: new FormControl(),
      orderno: new FormControl()
   });
  }
  addIssue( email,subject,issue, fname, pnumber, orderno) {
    this.ds.addIssue(email,subject,issue, fname, pnumber, orderno);
    this.router.navigate(['/']);
  }
}
