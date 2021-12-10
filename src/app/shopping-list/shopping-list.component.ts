import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/model/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [];
  ingridient!: Ingridient | undefined;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();

    this.shoppingListService.newIngridient.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
  }
}
