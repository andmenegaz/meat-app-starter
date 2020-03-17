import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  clear(){
    this.shoppingCartService.clear()
    console.log('limpou')
  }

  items(): CartItem[]{
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }
  
  closeCart(){
    console.log(this.items().length)
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }
}
