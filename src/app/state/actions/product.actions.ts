import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/app-product/models/product.interface';

export const loadProducts = createAction('[Product List] Load Products');

export const getAllProducts = createAction('[Product List] Loaded successfully', props<{products:ProductModel[]}>());

export const selectedProduct = createAction('[Selected Product] Selected product', props<{selectedProduct:ProductModel}>());

export const search = createAction('[Search] search', props<{search:any}>());