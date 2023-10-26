import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
    declarations: [
        ShopComponent,
        ProductItemComponent
    ],
    exports: [
        ShopComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ShopModule { }
