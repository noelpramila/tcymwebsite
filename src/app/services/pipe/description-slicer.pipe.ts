import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSlicer'
})
export class DescriptionSlicerPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length >= 130) {
      return value.slice(0, 127) + '...';
    }
    return value;
  }

}
