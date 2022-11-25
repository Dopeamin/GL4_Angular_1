import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  title = 'GL4_Angular_1';
  font = 'arial';
  size = 16;
  color = 'black';
  constructor() {}

  ngOnInit(): void {}
}
