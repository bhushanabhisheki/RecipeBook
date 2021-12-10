import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingridient } from 'src/app/shared/model/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  @ViewChild('amountInput') amountInput: ElementRef | undefined;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngridient() {
    const name = this.nameInput?.nativeElement?.value;
    const amount = this.amountInput?.nativeElement?.value;

    this.shoppingService.addIngridient(new Ingridient(name, amount));
  }
}
