import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A test Recipe","This is simply a test","https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg"),
    new Recipe("A test Recipe","This is simply a test","https://images-gmi-pmc.edge-generalmills.com/3512d6fb-41d3-41e7-a66d-f234a5942b6a.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
