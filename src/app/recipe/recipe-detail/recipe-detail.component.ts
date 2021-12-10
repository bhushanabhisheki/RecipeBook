import { Component, OnInit, Input } from '@angular/core';
import { Ingridient } from 'src/app/shared/model/ingridient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  addtoShoppingList(): void {
    if (this.recipe?.ingridients)
      this.recipeService.addIngridientToShoppingList(this.recipe.ingridients);
  }
}
