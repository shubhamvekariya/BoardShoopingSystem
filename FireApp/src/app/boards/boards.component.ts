import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardsService } from '../Services/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  public boardlist = [] 
  constructor(public boardServ:BoardsService, private router:Router) { }

  ngOnInit() {
    this.boardServ.getBoards().subscribe(data=>this.boardlist=data)
  }

  ShowCart(id:number)
  {
  this.router.navigate(['/ShoppingCart',id,"boards"]);
  }
}
