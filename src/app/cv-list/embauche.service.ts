import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CvService } from './cv-service.service';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor(
    private cvService: CvService,
    private toastSerivce: ToastrService
  ) {}

  getEmbauchedCvs() {
    return this.cvService.getCvs().filter((cv) => cv.embauche);
  }

  setEmbauched(i: number) {
    if (this.isEmbauched(i)) {
      this.toastSerivce.error('CV is already employed');
    } else {
      this.cvService.setCv(
        { ...this.cvService.getCvs()[i], embauche: true },
        i
      );

      this.toastSerivce.success('Employed');
    }
    console.log(this.cvService.getCvs());
  }

  isEmbauched(i: number) {
    return this.cvService.getCvs()[i].embauche;
  }
}
