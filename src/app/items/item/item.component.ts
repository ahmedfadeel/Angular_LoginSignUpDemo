import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Item} from '../../models/item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemTitle:string ='' ;
  itemForm :FormGroup; 
  itemParent:Item ={
   'name':'xxx',
   'price': 10,
   'count' : 20
  }; 
  constructor() { }

  ngOnInit(): void {
     this.itemForm=new FormGroup({
       'name' :new FormControl(),
       'price' :new FormControl(),
       'count' :new FormControl(),
     });
  }

}
