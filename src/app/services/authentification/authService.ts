import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export  class AuthService{

    constructor(){
        
    }

    isLoggedIn(){
        let user: any;
        user = localStorage.getItem('User');
        console.log(user);
        if(user){
            return true;
        }else{
            return false
        }
    }
} 