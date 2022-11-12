import { Injectable } from '@angular/core';
import { CvService } from './cv-service.service';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor(private cvService: CvService) {}

  getEmbauchedCvs() {
    return this.cvService.getCvs().filter((cv) => cv.embauche);
  }

  setEmbauched(i: number) {
    this.cvService.setCv({ ...this.cvService.getCvs()[i], embauche: true }, i);
  }
}
