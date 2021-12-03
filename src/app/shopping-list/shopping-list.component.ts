import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/model/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tometoes', 10),
  ]; //
  constructor() {}

  ngOnInit(): void {}
}
