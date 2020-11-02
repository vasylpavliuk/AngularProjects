import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles'
})
export class ConvertMilesPipe implements PipeTransform {

  transform(value: number, targetUnits: string): unknown {
    if(!value) return;

    switch(targetUnits) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * 1000 * 100;
      default:
        throw new Error('targertUnit is not supported!')
    }
  }
}
