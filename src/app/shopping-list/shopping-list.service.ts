import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/model/ingridient.model';

export class ShoppingListService {
  newIngridient = new Subject<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tometoes', 10),
  ]; //

  constructor() {}

  getIngridients(): Ingridient[] {
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient): void {
    this.ingridients.push(ingridient);
    this.newIngridient.next(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]): void {
    this.ingridients.push(...ingridients);
    this.newIngridient.next(this.ingridients.slice());
  }
}
