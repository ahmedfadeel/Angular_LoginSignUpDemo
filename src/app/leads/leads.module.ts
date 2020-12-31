import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';



@NgModule({
  declarations: [LeadsListingComponent, LeadsGridComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
