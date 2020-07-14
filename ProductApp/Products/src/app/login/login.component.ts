import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import {CredentialModel} from '../signup/credential.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// userCredential=<any>
  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log('Logged In');
    // this.usersService.login(this.userCredential)
    this.router.navigate(['/']);
  }

}
