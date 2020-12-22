import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(email: string): string {
    if(email.length > 23)
      return email.substring(0, 20) + '...';
    return email;
  }

}
