import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  public admin 
  AdminForm : FormGroup
  constructor(private bs: LoginService, private router:Router, private router1:ActivatedRoute) { }

  ngOnInit() {
    this.AdminForm = new FormGroup({
      _id: new FormControl(),
      AdminName: new FormControl(),
      Speed: new FormControl(),
      Range: new FormControl(),
      Warranty: new FormControl(),
      Price: new FormControl(),
      ShippingTime: new FormControl()
   });
   this.bs.ShowAdminById(this.router1.snapshot.paramMap.get('id')).subscribe(data=>this.admin=data);
  }
  editAdmin(AdminName,Password) {
    this.router1.params.subscribe(params => {
       this.bs.editAdmin(AdminName,Password,params['id']);
       this.router.navigate(['/DisplayAdmin']);
 });
}
}