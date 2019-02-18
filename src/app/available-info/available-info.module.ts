import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableInfoComponent } from './available-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AvailableInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModalModule
  ],
  exports: [AvailableInfoComponent]
})
export class AvailableInfoModule { }
