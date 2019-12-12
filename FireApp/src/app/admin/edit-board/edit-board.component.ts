import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../Services/boards.service';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {
  public board 
  BoardForm : FormGroup
  constructor(private bs: BoardsService, private router:Router, private router1:ActivatedRoute) { }

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
   this.bs.ShowBoardById(this.router1.snapshot.paramMap.get('id')).subscribe(data=>this.board=data);
  }
  editBoard(BoardName,Speed,Range,Warranty,Price,ShippingTime) {
    this.router1.params.subscribe(params => {
       this.bs.editBoard(BoardName,Speed,Range,Warranty,Price,ShippingTime,params['id']);
       this.router.navigate(['/DisplayBoard']);
 });
}
}