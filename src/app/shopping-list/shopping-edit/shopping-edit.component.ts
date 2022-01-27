import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingridient } from 'src/app/shared/model/ingridient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm | undefined;
  shoppingSubscription: Subscription | undefined;
  editMode = false;
  editedItemIndex: number = -1;
  editedItem: Ingridient | undefined;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingSubscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngridient(index);
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  addIngridient(form: NgForm) {
    const value = form.value;
    const newIngridient = new Ingridient(value.name, value.amount);
    if (this.editMode)
      this.shoppingService.updateIngridient(
        this.editedItemIndex,
        newIngridient
      );
    else this.shoppingService.addIngridient(newIngridient);

    this.editMode = false;
    this.slForm?.reset();
  }

  ngOnDestroy() {
    this.shoppingSubscription?.unsubscribe();
  }
}
