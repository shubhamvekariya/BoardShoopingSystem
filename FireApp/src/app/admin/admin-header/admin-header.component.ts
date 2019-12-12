import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  public username
  constructor( private router:Router,) { }

  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(this.username==null)
    {
      this.router.navigate(['/Login']);
    }
  }

  LogOut()
  {
    localStorage.removeItem("username");
    this.router.navigate(['/Login']);
  }
}
