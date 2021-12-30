import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from '../shared/model/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[] = [];
  ingridient!: Ingridient | undefined;
  private ingridientChangedSubscription: Subscription | undefined;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();

    this.ingridientChangedSubscription =
      this.shoppingListService.newIngridient.subscribe(
        (ingridients: Ingridient[]) => {
          this.ingridients = ingridients;
        }
      );
  }

  ngOnDestroy() {
    if (this.ingridientChangedSubscription)
      this.ingridientChangedSubscription.unsubscribe();
  }
}
