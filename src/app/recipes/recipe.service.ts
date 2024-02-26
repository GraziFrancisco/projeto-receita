import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe('Bolo Nega Maluca', 'Delicioso bolo de chocolate, fácil de fazer', 'https://i.pinimg.com/736x/0b/1a/a7/0b1aa7407617f271085e721fa1f06a9b.jpg'),
      new Recipe('Torta de Franco', 'Deliciosa torta de frango com requeijão, fácil de fazer', 'https://coolicias.com.br/wp-content/uploads/2023/06/Torta-de-frango-de-liquidificador-1024x683-optimized.jpg')
      
    ];

    getRecipes() {
      return this.recipes.slice();
    }
}