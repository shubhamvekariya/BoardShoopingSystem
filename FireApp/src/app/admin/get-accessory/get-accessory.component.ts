import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessoriesService } from '../../Services/accessories.service';

@Component({
  selector: 'app-get-accessory',
  templateUrl: './get-accessory.component.html',
  styleUrls: ['./get-accessory.component.css']
})
export class GetAccessoryComponent implements OnInit {

  public accessorylist = [] 
  constructor(public accessoryServ:AccessoriesService, private router:Router) { }

  ngOnInit() {
    this.accessoryServ.getAccessories().subscribe(data=>this.accessorylist=data)
  }

  DeleteAccessory(id) {
    this.accessoryServ.DeleteAccessory(id).subscribe(res => {
      console.log('Deleted');
    });
    this.accessoryServ.getAccessories().subscribe(data=>this.accessorylist=data)
  }

  EditAccessory(id) {
    this.router.navigate(['/EditAccessory',id]);
  }

}
