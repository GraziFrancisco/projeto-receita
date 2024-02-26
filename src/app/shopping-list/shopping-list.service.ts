import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] = [
        new Ingredient('Ovos', 3, 'unidades'),
        new Ingredient('Farinha', 1, 'xícara'),
        new Ingredient('Leite', 1, 'xícara'),
        new Ingredient('Margarina', 2, 'colheres'),
        new Ingredient('Chocolate em pó', 4, 'colheres'),
        new Ingredient('Fermento em pó', 1, 'colher'),
        
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}