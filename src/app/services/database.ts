import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { toArray } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataBase{

    user: any;
    // URL = "https://restcountries.com/v3.1/all";
    URL = "https://roadmapsaf.herokuapp.com/saf/"
    

    constructor(private http: HttpClient, private spinner: NgxSpinnerService){

    }
    //Cette partie est resevee a 

    getUsers(){
        return this.http.get(`${this.URL}listuser`);
    }

    getPublications(){
      return this.http.get(`${this.URL}listpublication`);
    }

    loginUser(user: any){
      return this.http.post<any>(this.URL, user)
    }

    isLoggedIn(user: any){
      return  this.http.post(`${this.URL}login`, user);
    }

    addPublication(point: any){
      let point2 = {
        "data":  point.data,
        "user": 2
    }

      return this.http.post(`${this.URL}addPublication`, point2);
    }

    dropPont(){

    }

    updatePoint(){

    }


}