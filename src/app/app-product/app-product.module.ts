import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRootComponent } from './product-root.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { ProductToolbarComponent } from './components/product-toolbar/product-toolbar.component';
import { SharedMaterialModule } from '../app-material/shared-material.module';

@NgModule({
  declarations: [
    ProductRootComponent,
    ProductCardComponent,
    ProductTableComponent,
    ProductToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(ProductRoutes)
  ]
})
export class AppProductModule { }
