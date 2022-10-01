import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent implements OnInit {
  @Input() cartes?: Carte[];
  @Input() select?: number;
  @Output() onSelectEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelect(i: number) {
    this.onSelectEvent.emit(i);
  }
}
