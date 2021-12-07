import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
