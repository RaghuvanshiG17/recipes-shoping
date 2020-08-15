import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe("A test Recipe","This is simply a test","https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg"),
    new Recipe("A test Recipe","This is simply a test","https://images-gmi-pmc.edge-generalmills.com/3512d6fb-41d3-41e7-a66d-f234a5942b6a.jpg")
  ];
  

  getRecipes(){
    return this.recipes.slice();
  }

}
