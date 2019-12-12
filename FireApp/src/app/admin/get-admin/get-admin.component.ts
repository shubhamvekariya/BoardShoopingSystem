import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-get-admin',
  templateUrl: './get-admin.component.html',
  styleUrls: ['./get-admin.component.css']
})
export class GetAdminComponent implements OnInit {
  public adminlist = [] 
  constructor(public adminServ:LoginService, private router:Router) { }

  ngOnInit() {
    this.adminServ.getAdmin().subscribe(data=>this.adminlist=data)
  }

  EditAdmin(id) {
    this.router.navigate(['/EditAdmin',id]);
  }
}
