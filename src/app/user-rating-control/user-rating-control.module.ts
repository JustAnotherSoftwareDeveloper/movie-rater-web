import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRatingControlComponent } from './user-rating-control.component';
import { NgbModalModule, NgbRating, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [UserRatingControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbRatingModule
  ],
  exports: [UserRatingControlComponent]
})
export class UserRatingControlModule { }
