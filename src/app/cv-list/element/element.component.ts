import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carte } from 'src/app/carte-visite/carte/carte.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  @Input() data?: Carte;
  @Input() selected?: boolean;
  @Output() onSelectEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect() {
    this.onSelectEvent.emit();
  }
}
