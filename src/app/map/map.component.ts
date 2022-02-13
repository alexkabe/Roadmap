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
  tables = [
    {
      data: 'Je suis la CAF 1',
      date_publication: "12-02-2002",
    },
    {
      data: 'Je suis la CAF 2',  
      date_publication: "12-02-2002",
    },
    {
      data: 'Je suis la CAF 3',
      date_publication: "12-02-2002",
    },
    {
      data: 'Je suis la CAF 4',
      date_publication: "12-02-2002",
    },
    {
      data: 'Je suis la CAF 5',
      date_publication: "12-02-2002",
    }
  ];

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private formBuilder: FormBuilder, private database: DataBase) { }
  // convenience getter for easy access to form fields
  

  ngOnInit(): void {
    this.database.getPublications().subscribe(data =>{
      // console.log(data);
      this.tables2 = data;
    });
  }
}
// function ScrollToBottomDirective(ScrollToBottomDirective: any) {
//   throw new Error('Function not implemented.');
// }

