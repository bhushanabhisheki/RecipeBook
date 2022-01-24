import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingridient } from 'src/app/shared/model/ingridient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngridient(form: NgForm) {
    const value = form.value;
    this.shoppingService.addIngridient(
      new Ingridient(value.name, value.amount)
    );
  }
}
