import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipe } from '../../pipes/email.pipe';



@NgModule({
  declarations: [EmailPipe],
  imports: [
    CommonModule
  ],
  exports: [EmailPipe]
})
export class SharedModule { }
