import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessoriesService } from '../../Services/accessories.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-accessory',
  templateUrl: './edit-accessory.component.html',
  styleUrls: ['./edit-accessory.component.css']
})
export class EditAccessoryComponent implements OnInit {
  public accessory 
  AccessoryForm : FormGroup
  constructor(private bs: AccessoriesService, private router:Router, private router1:ActivatedRoute) { }

  ngOnInit() {
    this.AccessoryForm = new FormGroup({
      _id: new FormControl(),
      AccessoryName: new FormControl(),
      Description1: new FormControl(),
      Description2: new FormControl(),
      Description3: new FormControl(),
      Description4: new FormControl(),
      Description5: new FormControl(),
      Price: new FormControl(),
      ShippingTime: new FormControl()
   });
   this.bs.ShowAccessoryById(this.router1.snapshot.paramMap.get('id')).subscribe(data=>this.accessory=data);
  }
  editAccessory(AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime) {
    this.router1.params.subscribe(params => {
       this.bs.editAccessory(AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime,params['id']);
       this.router.navigate(['/DisplayAccessory']);
 });
}
}
