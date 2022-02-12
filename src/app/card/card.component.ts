import {Component} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataBase } from '../services/database';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titre ="Alex kabe kabe"
  inputValue= "";

  tables: any = [];

  constructor(private database: DataBase,private spinner: NgxSpinnerService) { 
    this.spinner.show();
    this.database.getPublications().subscribe((data: any) =>{
        this.tables = data;
        console.log(data);
        this.spinner.hide();
      });
  }
}