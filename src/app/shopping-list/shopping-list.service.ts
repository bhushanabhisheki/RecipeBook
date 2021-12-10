import { EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/model/ingridient.model';

export class ShoppingListService {
  newIngridient = new EventEmitter<Ingridient>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tometoes', 10),
  ]; //

  constructor() {}

  getIngridients(): Ingridient[] {
    return this.ingridients.slice();
  }
}
