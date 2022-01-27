import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number | undefined;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagepath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id ? this.id : 0);
      recipeName = recipe.name;
      recipeImagepath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingridients']) {
        for (let ingridient of recipe.ingridients) {
          const formGroup = new FormGroup({
            name: new FormControl(ingridient.name),
            amount: new FormControl(ingridient.amount),
          });

          recipeIngredients.push(formGroup);
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagepath),
      description: new FormControl(recipeDescription),
      ingridients: recipeIngredients,
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm?.get('ingridients'))?.controls;
  }

  onAddIngridient() {
    const addformGroup = new FormGroup({
      name: new FormControl(),
      amount: new FormControl(),
    });
    (<FormArray>this.recipeForm?.get('ingridients'))?.controls.push(
      addformGroup
    );
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
