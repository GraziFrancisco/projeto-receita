import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameImput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @ViewChild('measureInput', {static: false}) measureInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingMeasure = this.measureInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingMeasure);
    this.ingredientAdded.emit(newIngredient);
  }

}
