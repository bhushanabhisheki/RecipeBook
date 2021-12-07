import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipeSelected: Recipe | undefined;

  constructor() {}

  ngOnInit(): void {}

  selectedRecipe(recipe: Recipe) {
    this.recipeSelected = recipe;
  }
}
