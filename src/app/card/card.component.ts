import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titre ="Alex kabe kabe"
  inputValue= "";
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
          titre: 'Je suis la CAF 5',
          date: "12-02-2002",
          heure: "00:00:00"
        },
        {
          titre: 'Je suis la CAF 5',
          date: "12-02-2002",
          heure: "00:00:00"
        },
        {
          titre: 'Je suis la CAF 5',
          date: "12-02-2002",
          heure: "00:00:00"
        },
        {
          titre: 'Je suis la CAF 5',
          date: "12-02-2002",
          heure: "00:00:00"
        }
      ];
}