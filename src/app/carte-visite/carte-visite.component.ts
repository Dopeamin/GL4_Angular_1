import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  public clicked: boolean;
  constructor() {
    this.clicked = false;
  }

  ngOnInit(): void {}

  onClick() {
    this.clicked = !this.clicked;
  }
}
