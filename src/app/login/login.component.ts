import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentification/authService';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { 

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  cancelConnexion(p: any){

  }

  connexion(){


    localStorage.setItem('User', JSON.stringify(this.loginForm.value));
    this.router.navigate(['/team']);
    // isLoggedIn(this.loginForm.value);
    // ceci est un test

  }

}
