import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";


@Injectable({
    providedIn: 'root'
})
export class DataBase{

    URL = "https://restcountries.com/v3.1/all";
    options= {
        // headers?: HttpHeaders | {[header: string]: string | string[]},
        observe: 'response',
        // params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
        reportProgress: Boolean,
        responseType: 'json',
        withCredentials: Boolean,
      }
    constructor(private http: HttpClient, private spinner: NgxSpinnerService){

    }
    //Cette partie est resevee a 

    getUsers(){
        // this.spinner.show();
        return this.http.get(this.URL, {
            // headers?: HttpHeaders | {[header: string]: string | string[]},
            observe: 'response',
            // params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
            reportProgress: true,
            responseType: 'json',
            withCredentials: true,
          }).subscribe(data =>{
              console.log(data);
            //   this.spinner.hide();
          });
    }

    loginUser(user: any){
      return this.http.post<any>(this.URL, user)
    }

    loggedIn(){
      
    }

    addPoint(){

    }

    dropPont(){

    }

    updatePoint(){

    }


}