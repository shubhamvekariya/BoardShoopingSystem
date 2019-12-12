import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardsService } from '../../Services/boards.service';

@Component({
  selector: 'app-get-board',
  templateUrl: './get-board.component.html',
  styleUrls: ['./get-board.component.css']
})
export class GetBoardComponent implements OnInit {
  public boardlist = [] 
  constructor(public boardServ:BoardsService, private router:Router) { }

  ngOnInit() {
    this.boardServ.getBoards().subscribe(data=>this.boardlist=data)
  }

  DeleteBoard(id) {
    this.boardServ.DeleteBoard(id).subscribe(res => {
      console.log('Deleted');
    });
    this.boardServ.getBoards().subscribe(data=>this.boardlist=data)
  }

  EditBoard(id) {
    this.router.navigate(['/EditBoard',id]);
  }
}
