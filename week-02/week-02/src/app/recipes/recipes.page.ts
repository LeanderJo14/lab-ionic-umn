import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
{
id: 'r1',
title: 'Gado-gado',
imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fresepkoki.id%2Fwp-content%2Fuploads%2F2018%2F01%2FResep-Gado-Gado-Padang.jpg%3Ffit%3D1536%252C1419%26ssl%3D1&imgrefurl=https%3A%2F%2Fresepkoki.id%2Fresep-gado-gado-padang%2F&docid=vEIvJdfSaZUsIM&tbnid=HjuR151JZo11KM%3A&vet=10ahUKEwjI5O6P1JPkAhW-4XMBHRlwCSwQMwhaKAYwBg..i&w=1536&h=1419&bih=615&biw=681&q=gado%20gado&ved=0ahUKEwjI5O6P1JPkAhW-4XMBHRlwCSwQMwhaKAYwBg&iact=mrc&uact=8',
ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'tauge']

}

  ]

  ngOnInit() {
  }

}
