import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/authentification/authService';
import { DataBase } from '../services/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isCollapsed = true;

  loginForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, 
              private database: DataBase, private spinner: NgxSpinnerService) { 

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  cancelConnexion(p: any){

  }

  connexion(f:any){
    this.spinner.show();
    // this.database.user =  this.loginForm.value;
    this.database.isLoggedIn(this.loginForm.value).subscribe((val: any) =>{
      console.log(val.status)
      if(val.status){
        localStorage.setItem('byu5wec467ubwbtec7n6wc7er6', "byu5wec4677er6")
        this.database.user = val.user;
        this.router.navigate(['/team']);
        console.log(val.user)
        localStorage.setItem('userConnected', JSON.stringify(val.user))
        f.reset();
        this.spinner.hide();
      }else{
        console.log("tu n'es pas passe")
        console.log(f.value)
        this.spinner.hide();
        // this.isCollapsed= true;
      }
    })
  }

}
