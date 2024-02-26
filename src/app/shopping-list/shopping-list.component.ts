import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
   ingredients: Ingredient [];

  constructor(private elService: ShoppingListService) {}
  
  ngOnInit(): void {
      this.ingredients = this.elService.getIngredients();
      this.elService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        }
      );
  }

}
