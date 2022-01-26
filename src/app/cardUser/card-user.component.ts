import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {
  
    titre = "Alex kabe kabe"
    itemUpdate = "";
    isClicked = false;
    popIsOpen = false;
    public isCollapsed = true;
    submitted = false;
    inputValue = "";
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
    // f: any;
    // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor() { 

    }
      // convenience getter for easy access to form fields

  
    ngOnInit(): void {

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
            titre: this.inputValue,
            date: "12-20-2021",
            heure: "12:09:12"
        }
        
        this.tables.push(point);
        console.log(point);
        this.inputValue = '';
    }

    updatePoint(item: string, idItem: number, p: any){
        console.log(item + idItem);
        p.close();
        this.popIsOpen = !this.popIsOpen;
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
        this.tables[index].titre = this.itemUpdate;
        this.popIsOpen = !this.popIsOpen;
    }
}