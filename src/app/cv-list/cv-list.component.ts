import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent implements OnInit {
  public cartes: Carte[];
  public select?: number;
  constructor() {
    this.cartes = [
      {
        nom: 'Hamdouni',
        prenom: 'Mohamed Amine',
        job: 'Software Engineer',
        image: 'amine.jpg',
        citation: 'What doesnt kill you makes you stronger',
        description: 'I build web applications for fun',
        keys: 'HTML CSS JS REACT ANGULAR PHP',
        couleur: '#5fa5fa',
      },
      {
        nom: 'Hamdouni',
        prenom: 'Mohamed Amine 2',
        job: 'Software Engineer',
        image: 'john-doe.png',
        citation: 'What doesnt kill you makes you stronger',
        description: 'I build web applications for fun',
        keys: 'HTML CSS JS REACT ANGULAR PHP',
        couleur: '#5fa5fa',
      },
    ];
  }

  ngOnInit(): void {}

  onSelect(i: number) {
    this.select = i;

    console.log(this.select);
  }
}
