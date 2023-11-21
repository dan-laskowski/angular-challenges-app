import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardformat',
  standalone: true,
})
export class CardformatPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 16) return '';
    return value
      .replace(/\s+/g, '')
      .replace(/(\d{4})/g, '$1-')
      .trim()
      .slice(0, -1);
  }
}
