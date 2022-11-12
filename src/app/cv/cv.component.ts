import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';
import { CvService } from '../cv-list/cv-service.service';
import { EmbaucheService } from '../cv-list/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  public cartes: Carte[];
  public embauched: Carte[];
  public select?: number;

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService
  ) {
    this.cartes = cvService.getCvs();
    this.embauched = embaucheService.getEmbauchedCvs();
  }

  ngOnInit(): void {}

  onSelect(i: number) {
    this.select = i;
  }

  fetch() {
    console.log(this.cvService.getCvs());
    this.embauched = this.embaucheService.getEmbauchedCvs();
  }
}
