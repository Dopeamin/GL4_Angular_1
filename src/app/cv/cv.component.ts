import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';
import { CvService } from '../cv-list/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  public cartes: Carte[];
  public select?: number;
  constructor(private cvService: CvService) {
    this.cartes = cvService.getCvs();
  }

  ngOnInit(): void {}

  onSelect(i: number) {
    this.select = i;
  }
}
