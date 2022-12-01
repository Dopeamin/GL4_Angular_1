import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';
import { selectSubject } from '../_shared/show-details.observable';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent implements OnInit {
  @Input() cartes?: Carte[];
  @Input() select?: number;
  constructor() {}

  ngOnInit(): void {}

  onSelect(i: number) {
    selectSubject.next(i);
  }
}
