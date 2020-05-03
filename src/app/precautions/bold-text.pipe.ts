import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {
  constructor() { }
  transform(value: String): any {
    return '<b>' + value.toUpperCase() + '</b>';
  }
}
