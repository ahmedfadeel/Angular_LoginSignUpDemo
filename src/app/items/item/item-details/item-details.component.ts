import { Component, Input, OnInit } from '@angular/core';
import {Item} from '../../../models/item';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input()  childItem :Item;
   constructor() { }
   
  ngOnInit(): void {
  }

}
