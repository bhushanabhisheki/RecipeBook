import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Ingridient } from 'src/app/shared/model/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef | undefined;
  @ViewChild('amountInput') amountInput: ElementRef | undefined;

  @Output() newIngridient = new EventEmitter<Ingridient>();

  constructor() {}

  ngOnInit(): void {}

  addIngridient() {
    const name = this.nameInput?.nativeElement?.value;
    const amount = this.amountInput?.nativeElement?.value;

    this.newIngridient.emit(new Ingridient(name, amount));
  }
}
