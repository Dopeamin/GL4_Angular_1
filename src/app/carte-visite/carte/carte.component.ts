import { Component, Input, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/_shared/observable.service';
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

  constructor(
    private observableService: ObservableService
  ) {
    this.hovered = false;
  }

  ngOnInit(): void {
    this.observableService.getImageObservable().subscribe({
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
