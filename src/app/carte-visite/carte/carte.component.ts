import { Component, Input, OnInit } from '@angular/core';
import { Carte } from './carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  @Input() carte?: Carte;

  public hovered: boolean;
  
  constructor() {
    this.hovered = false;
  }

  ngOnInit(): void {}

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }
}
