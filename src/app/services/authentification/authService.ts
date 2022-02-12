import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { DataBase } from "../database";

@Injectable({
    providedIn: 'root'
})
export  class AuthService{

    constructor(private spinner: NgxSpinnerService, private database: DataBase){
        
    }

    async isLoggedIn(user:any){

        // await this.database.isLoggedIn(user).then(val =>{
        //     console.log(val)
        // })
   }
} 

function data(data: any, arg1: (any: any) => true | undefined, arg2: (err: any) => boolean) {
    throw new Error("Function not implemented.");
}
