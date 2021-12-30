import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [],
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipeSelected: Recipe | undefined;
  recipeServiceSubscription: Subscription | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeServiceSubscription =
      this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
        this.recipeSelected = recipe;
      });
  }

  selectedRecipe(recipe: Recipe) {
    this.recipeSelected = recipe;
  }

  ngOnDestroy() {
    if (this.recipeServiceSubscription)
      this.recipeServiceSubscription.unsubscribe();
  }
}
