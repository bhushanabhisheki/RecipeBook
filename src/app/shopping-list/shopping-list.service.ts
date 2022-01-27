import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/model/ingridient.model';

export class ShoppingListService {
  newIngridient = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tometoes', 10),
  ]; //

  constructor() {}

  getIngridients(): Ingridient[] {
    return this.ingridients.slice();
  }

  getIngridient(index: number) {
    return this.ingridients[index];
  }

  addIngridient(ingridient: Ingridient): void {
    this.ingridients.push(ingridient);
    this.newIngridient.next(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]): void {
    this.ingridients.push(...ingridients);
    this.newIngridient.next(this.ingridients.slice());
  }

  updateIngridient(index: number, ingridient: Ingridient): void {
    console.log(ingridient);
    console.log(this.ingridients[index]);
    this.ingridients[index] = ingridient;
    this.newIngridient.next(this.ingridients.slice());
  }

  deleteIngridient(index: number): void {
    this.ingridients.splice(index, 1);
    console.log(this.ingridients);
    this.newIngridient.next(this.ingridients.slice());
  }
}
