import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardsService } from '../../Services/boards.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  BoardForm : FormGroup
  constructor(private bs: BoardsService, private router:Router) { }

  ngOnInit() {
    this.BoardForm = new FormGroup({
      _id: new FormControl(),
      BoardName: new FormControl(),
      Speed: new FormControl(),
      Range: new FormControl(),
      Warranty: new FormControl(),
      Price: new FormControl(),
      ShippingTime: new FormControl()
   });
  }
  addBoard(_id,BoardName,Speed,Range,Warranty,Price,ShippingTime) {
    this.bs.addBoard(_id,BoardName,Speed,Range,Warranty,Price,ShippingTime);
    this.router.navigate(['/DisplayBoard']);
  }
}
