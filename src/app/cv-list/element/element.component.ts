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

  constructor() {}

  ngOnInit(): void {}
}
