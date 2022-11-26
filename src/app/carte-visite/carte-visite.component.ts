import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from '../cv-list/embauche.service';
import { Carte } from './carte/carte.model';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  public clicked: boolean;
  @Input() carte: Carte;
  @Input() id?: number;

  @Output() embauche: EventEmitter<any> = new EventEmitter();
  constructor(private service: EmbaucheService, private router: Router) {
    this.clicked = false;
    this.carte = {
      id: 1,
      nom: 'Hamdouni',
      prenom: 'Mohamed Amine',
      job: 'Software Engineer',
      image: 'amine.jpg',
      citation: 'What doesnt kill you makes you stronger',
      description: 'I build web applications for fun',
      keys: 'HTML CSS JS REACT ANGULAR PHP',
      couleur: '#5fa5fa',
      embauche: false,
    };
  }

  ngOnInit(): void {}

  onClick() {
    this.clicked = !this.clicked;
  }

  onClickEvent(color: string) {
    this.carte.couleur = color;
  }

  onEmbauche() {
    if (this.id || this.id === 0) this.service.setEmbauched(this.id);
    this.embauche.emit();
  }

  onDetails() {
    this.router.navigateByUrl(`/cv/details/${this.carte.id}`);
  }
}
