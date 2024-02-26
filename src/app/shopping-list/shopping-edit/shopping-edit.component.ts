import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameImput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @ViewChild('measureInput', {static: false}) measureInputRef: ElementRef;
  
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
      
  }
  
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingMeasure = this.measureInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingMeasure);
    this.slService.addIngredient(newIngredient);
  }

}
