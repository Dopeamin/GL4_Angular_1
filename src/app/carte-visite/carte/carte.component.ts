import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheService } from 'src/app/cv-list/embauche.service';
import { imageObservable$ } from 'src/app/_shared/image.observable';
import { Carte } from './carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  @Input() carte?: Carte;
  @Input() id?: number;

  public hovered: boolean;

  constructor(private service: EmbaucheService) {
    this.hovered = false;
  }

  ngOnInit(): void {
    imageObservable$.subscribe({
      next: (value) => {
        this.carte!.image = value as string;
      },
    });
  }

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }
}
