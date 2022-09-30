import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Carte } from './carte/carte.model';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit, OnChanges {
  public clicked: boolean;
  public carte: Carte;
  constructor() {
    this.clicked = false;
    this.carte = {
      nom: 'Hamdouni',
      prenom: 'Mohamed Amine',
      job: 'Software Engineer',
      image: 'amine.jpg',
      citation: 'What doesnt kill you makes you stronger',
      description: 'I build web applications for fun',
      keys: 'HTML CSS JS REACT ANGULAR PHP',
      couleur: '#5fa5fa',
    };
  }

  ngOnInit(): void {}

  onClick() {
    this.clicked = !this.clicked;
  }

  onClickEvent(color: string) {
    this.carte.couleur = color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.carte);
  }
}
