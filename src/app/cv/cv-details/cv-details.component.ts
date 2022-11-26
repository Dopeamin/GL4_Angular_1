import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Carte } from 'src/app/carte-visite/carte/carte.model';
import { CvService } from 'src/app/cv-list/cv-service.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css'],
})
export class CvDetailsComponent implements OnInit {
  cv?: Carte;
  cartes: Carte[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CvService
  ) {
    this.route.params.subscribe((params: any) => {
      this.cv = service
        .getCvs()
        .find((element: Carte) => element.id.toString() === params.id)!;

      console.log(this.cv);
    });
    this.cartes = service.getCvs();
  }

  ngOnInit(): void {}

  deleteCv() {
    this.service.removeCv(this.cv!);
    this.router.navigateByUrl('/');
  }
}
