import { Injectable } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    {
      nom: 'Hamdouni',
      prenom: 'Mohamed Amine',
      job: 'Software Engineer',
      image: 'amine.jpg',
      citation: 'What doesnt kill you makes you stronger',
      description: 'I build web applications for fun',
      keys: 'HTML CSS JS REACT ANGULAR PHP',
      couleur: '#5fa5fa',
      embauche: false,
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
      embauche: false,
    },
  ];
  constructor() {}

  getCvs(): Carte[] {
    return this.cvs;
  }

  setCv(cv: Carte, i: number) {
    this.cvs[i] = cv;
  }
}
