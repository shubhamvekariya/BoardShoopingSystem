import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl,  Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public userlist
DetailForm : FormGroup
  constructor(private ls: LoginService, private router:Router, private router1:ActivatedRoute) { }

  ngOnInit() {
    this.DetailForm = new FormGroup({
      userid: new FormControl(),
      password: new FormControl()
      });
      
  }
  loginCheck( userid, password) {
    this.ls.loginCheck(userid).subscribe(data=>this.userlist=data);
    if(this.userlist != null && this.userlist["Password"]==password){
      localStorage.setItem("username",userid);
      this.router.navigate(['/DisplayBoard']);
    }
    else{
      this.router.navigate(['/Login']);
    }
  }
}
