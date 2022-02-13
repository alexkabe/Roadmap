import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBase } from '../services/database';

import { ScrollToBottomDirective2 } from '../services/scrollService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // @ViewChild(ScrollToBottomDirective)
  // scroll = ScrollToBottomDirective2; 

  // slideIndex = 1;
  // inputValue = "";
  titre ="Alex Kabe Kabe";
  tables2:any = [];
  tables = [];
  userConnected:any = {};
  usersData: any = [];
  users: any= []
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private formBuilder: FormBuilder, private database: DataBase) { }
  // convenience getter for easy access to form fields
  

  ngOnInit(): void {
    this.database.getPublications().subscribe(data =>{
      // console.log(data);
      this.tables2 = data;
    });

    this.database.getUsers().subscribe((userList: any) =>{
      this.users = userList;
      this.userConnected = localStorage.getItem('userConnected');
      this.userConnected = JSON.parse(this.userConnected) 
      for (let user of this.users){
        if(this.userConnected.id !== user.id){
          this.database.getDataOneUser(user.id).subscribe(dataUser =>{
            let userData ={
              user: user.first_name + " " + user.last_name,
              data:  dataUser
            }
            this.usersData.push(userData);
          })
        }
      }
    })
  }
}
// function ScrollToBottomDirective(ScrollToBottomDirective: any) {
//   throw new Error('Function not implemented.');
// }

