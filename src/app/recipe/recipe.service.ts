import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Paneer Tikka Masala',
      'Recipe to prepare Panner Tikka Masala',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-masala-recipe-1-500x500.jpg'
    ),
    new Recipe(
      'Chiken Tikka',
      'Recipe to prepare Chiken Tikka',
      'https://www.awesomecuisine.com/wp-content/uploads/2014/03/chicken-tikka.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
