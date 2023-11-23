import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence',
  standalone: true,
})
export class SentencePipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    return value?.replaceAll('-', ' ');
  }
}
