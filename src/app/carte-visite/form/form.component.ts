import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carte } from '../carte/carte.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() carte?: Carte;
  @Output() onClickEvent: EventEmitter<string> = new EventEmitter();
  public favoriteColor: string = 'black';
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onClickEvent.emit(this.favoriteColor);
  }
}
