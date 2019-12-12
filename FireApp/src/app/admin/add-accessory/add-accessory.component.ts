import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessoriesService } from '../../Services/accessories.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-accessory',
  templateUrl: './add-accessory.component.html',
  styleUrls: ['./add-accessory.component.css']
})
export class AddAccessoryComponent implements OnInit {
  AccessoryForm : FormGroup
  constructor(private bs: AccessoriesService, private router:Router) { }

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
  }
  addAccessory(_id,AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime) {
    this.bs.addAccessory(_id,AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime);
    this.router.navigate(['/DisplayAccessory']);
  }

}
