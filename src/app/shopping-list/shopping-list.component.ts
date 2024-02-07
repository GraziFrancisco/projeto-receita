import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Ovos', 3, 'unidades'),
    new Ingredient('Farinha', 1, 'xícara'),
    new Ingredient('Leite', 1, 'xícara'),
    new Ingredient('Margarina', 2, 'colheres'),
    new Ingredient('Chocolate em pó', 4, 'colheres'),
    new Ingredient('Fermento em pó', 1, 'colher'),
    
  ];
  
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
    
}
