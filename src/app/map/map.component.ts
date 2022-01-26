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
  tables = [
    {
      titre: 'Je suis la CAF 1',
      date: "12-02-2002",
      heure: "00:00:00"
    },
    {
      titre: 'Je suis la CAF 2',  
      date: "12-02-2002",
      heure: "00:00:00"
    },
    {
      titre: 'Je suis la CAF 3',
      date: "12-02-2002",
      heure: "00:00:00"
    },
    {
      titre: 'Je suis la CAF 4',
      date: "12-02-2002",
      heure: "00:00:00"
    },
    {
      titre: 'Je suis la CAF 5',
      date: "12-02-2002",
      heure: "00:00:00"
    }
  ];

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private formBuilder: FormBuilder, private database: DataBase) { }
  // convenience getter for easy access to form fields
  

  ngOnInit(): void {
    this.database.getUsers();
  }
}
function ScrollToBottomDirective(ScrollToBottomDirective: any) {
  throw new Error('Function not implemented.');
}

