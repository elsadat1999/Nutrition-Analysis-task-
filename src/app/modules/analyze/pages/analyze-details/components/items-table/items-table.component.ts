import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.interface';

@Component({
  selector: 'items-table-component',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
 @Input() ingredients:Ingredient[] = [];
 @Input() totalWeight:number = 0;
 @Input() totaCalories:number = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.ingredients[1].parsed[0].quantity  )
  }
  calculatorCaloriesItem(weight:number):number{

   return Math.round(weight / this.totalWeight * this.totaCalories)
   
  }
}