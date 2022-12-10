import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  private images = ['amine.jpg', 'john-doe.png'];
  constructor() {}

  getImageObservable(): Observable<string> {
    return new Observable((observer) => {
      const length = this.images.length;
      let i = 0;
      setInterval(() => {
        observer.next(this.images[i]);
        if (i < length - 1) i++;
        else i = 0;
      }, 1000);
    });
  }
}
