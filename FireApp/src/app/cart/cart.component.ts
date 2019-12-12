import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BoardsService } from '../Services/boards.service';
import { AccessoriesService } from '../Services/accessories.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private val=1;
  public cart 
  constructor(public boardServ:BoardsService,public accessoryServ:AccessoriesService, private router1:Router, private router:ActivatedRoute) { }

    ngOnInit() {
      localStorage.setItem("id",this.router.snapshot.paramMap.get('id'));
      localStorage.setItem("submit",this.router.snapshot.paramMap.get('submit'));
      if(localStorage.getItem("submit")=="boards")
      { 
        this.boardServ.ShowBoardById(localStorage.getItem("id")).subscribe(data=>this.cart=data);
      }
      if(localStorage.getItem("submit")=="accessory")
      { 
        this.accessoryServ.ShowAccessoryById(localStorage.getItem("id")).subscribe(data=>this.cart=data);
      }

    }
    minus()
    {
      this.val--;
    }
    plus()
    {
      this.val++;
    }
    return()
    {
      this.router1.navigate(['/']);
    }
    detail(id,val)
    {
      this.router1.navigate(['/PersonalDetail',id,val]);
    }
  }

