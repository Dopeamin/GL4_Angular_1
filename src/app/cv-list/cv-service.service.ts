import { Injectable } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    {
      id: 1,
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
      id: 2,
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

  removeCv(cv: Carte) {
    const index = this.cvs.findIndex((element) => cv.id === element.id);
    this.cvs.splice(index, 1);
  }
}
