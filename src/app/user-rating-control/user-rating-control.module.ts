import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRatingControlComponent } from './user-rating-control.component';

@NgModule({
  declarations: [UserRatingControlComponent],
  imports: [
    CommonModule
  ],
  exports: [UserRatingControlComponent]
})
export class UserRatingControlModule { }
