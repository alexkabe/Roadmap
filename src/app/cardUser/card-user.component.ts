import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataBase } from '../services/database';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {
  
    @ViewChild('scrollMe') scroll!: ElementRef;
    titre = "Alex kabe kabe"
    
    itemUpdate = "";
    isClicked = false;
    popIsOpen = false;
    public isCollapsed = true;
    submitted = false;
    inputValue = "";
    userConnected: any ={};
    tables: any =[];
    // f: any;
    // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(private database: DataBase,private spinner: NgxSpinnerService) {
        this.userConnected = (localStorage.getItem("userConnected"));
        this.userConnected =  JSON.parse(this.userConnected)
        this.chargeData();
    }
    
    chargeData(){
        
        this.spinner.show();
        this.database.getDataOneUser(this.userConnected.id).subscribe((data: any) =>{
            this.tables = data;
            this.spinner.hide();
          });
    }
      // convenience getter for easy access to form fields

  
    ngOnInit(): void {

    }

    scrollToBottom(){
        // this.scroll.nativeElement.scrollTop = 0;
    }
    addPoint(){
        this.isClicked = true;
    }

    removePoint(popContent: any){
        popContent.close()
        this.inputValue = '';
        this.isClicked = false;
    }

    validPoint(p: any){
        p.close();
        this.isClicked = false;
        let point = {
            "data":  this.inputValue,
            "user": 2,
            "status": false
        }
        
        // this.tables.push(point);
        this.database.addPublication(point).subscribe(data =>{
            console.log(data);
        })
        this.inputValue = "";
    }

    updatePoint(item: string, idItem: number, p: any){
        let publication ={
            id: idItem,
            data: item,
            user: this.userConnected.id
        }
        this.database.updatePublication(publication).subscribe(valeur=>{
            console.log(valeur);
            console.log(item + idItem);
            p.close();
            this.popIsOpen = !this.popIsOpen;
            this.chargeData();
        });
    }
    openUpdate(item: string, p: any){
        if (!this.popIsOpen){
            this.itemUpdate = item;
            p.open();
            this.popIsOpen = !this.popIsOpen;
        }
    }

    cancelUpdate(p: any, index: number){
        p.close();
        this.tables[index].data = this.itemUpdate;
        this.popIsOpen = !this.popIsOpen;
    }

    deletePublication(idItem: number, p: any){
        this.database.deletePublication({id: idItem}).subscribe(val =>{
            console.log(val);
            this.chargeData();
            p.close();
        })
    }
}