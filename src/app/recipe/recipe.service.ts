import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/model/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Paneer Tikka Masala',
      'Recipe to prepare Panner Tikka Masala',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-masala-recipe-1-500x500.jpg',
      [new Ingridient('Paneer', 1), new Ingridient('Butter', 1)]
    ),
    new Recipe(
      'Chiken Tikka',
      'Recipe to prepare Chiken Tikka',
      'https://www.awesomecuisine.com/wp-content/uploads/2014/03/chicken-tikka.jpg',
      [new Ingridient('chicken', 1), new Ingridient('butter', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(recipeId: number) {
    return this.recipes[recipeId];
  }

  addIngridientToShoppingList(ingridients: Ingridient[]) {
    this.shoppingListService.addIngridients(ingridients);
  }
}
