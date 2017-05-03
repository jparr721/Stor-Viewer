import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipeProvider {
  foodItem: string;
  apiKey: any;
  apiId: any;
  TitleKey: any;
  url: any;

  constructor(public http: Http) {
    console.log('Hello RecipeProvider Provider');
  }

  getRecipes(query) {
    this.url = "https://api.edamam.com/search?q=";
    this.apiKey = "87c7acf7c4b72994ef0eb98af12ddc02";
    this.apiId = "37cabf00";
    this.foodItem = this.url + query + "&app_id=$" + this.apiId + "&app_key=$" +
        this.apiKey;

    return this.http.get(this.foodItem).map(res => res.json().main);
      //.subscribe(res => this.TitleKey = res);
  }


}
