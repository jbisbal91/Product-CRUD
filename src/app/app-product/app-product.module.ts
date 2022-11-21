import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRootComponent } from './product-root.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { ProductToolbarComponent } from './components/product-toolbar/product-toolbar.component';
import { SharedMaterialModule } from '../app-material/shared-material.module';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

@NgModule({
  declarations: [
    ProductRootComponent,
    ProductCardComponent,
    ProductTableComponent,
    ProductToolbarComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductCardListComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild(ProductRoutes)
  ]
})
export class AppProductModule { }
