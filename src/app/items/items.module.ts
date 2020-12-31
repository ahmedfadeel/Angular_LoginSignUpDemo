import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ItemComponent, ItemDetailsComponent],
  imports: [
    CommonModule ,FormsModule,ReactiveFormsModule
  ] ,exports: [
    ItemComponent,
    ItemDetailsComponent 
  ]
})
export class ItemsModule { }
