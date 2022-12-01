import { Observable } from 'rxjs';

const images = ['amine.jpg', 'john-doe.png'];

export const imageObservable$ = new Observable((observer) => {
  const length = images.length;
  let i = 0;
  setInterval(() => {
    observer.next(images[i]);
    if (i < length - 1) i++;
    else i = 0;
  }, 1000);
});
