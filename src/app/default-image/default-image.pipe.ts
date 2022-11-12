import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImage implements PipeTransform {
  transform(image?: string) {
    return image?.trim().length ? image : 'amine.jpg'
  }
}
