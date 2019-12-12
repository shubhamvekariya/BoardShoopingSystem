import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../Services/accessories.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  public accessorylist = [] 
  constructor(public accessoryServ:AccessoriesService,  private router:Router) { }

  ngOnInit() {
    this.accessoryServ.getAccessories().subscribe(data=>this.accessorylist=data)

  }
  ShowCart(id:number)
  {
  this.router.navigate(['/ShoppingCart',id,"accessory"]);
  }
}
