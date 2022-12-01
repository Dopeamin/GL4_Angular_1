import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CvService } from 'src/app/cv-list/cv-service.service';
import { Carte } from '../carte/carte.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() carte?: Carte;
  @Output() onClickEvent: EventEmitter<string> = new EventEmitter();
  isAdd: boolean = true;
  public favoriteColor: string = 'black';
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {
    if (this.carte) this.isAdd = false;
    this.carte = this.carte || {
      nom: '',
      prenom: '',
      id: this.cvService.getCvs().length,
      job: '',
      image: '',
      couleur: '',
      citation: '',
      description: '',
      keys: '',
      embauche: false,
    };
  }

  onClick() {
    this.onClickEvent.emit(this.favoriteColor);
  }

  onAdd() {
    this.cvService.addCv(this.carte!);
    this.router.navigateByUrl('/')
  }
}
