import { createSelector } from '@ngrx/store';
import { ProductState } from 'src/app/app-product/models/product.state';
import { AppState } from '../app.state';

export const selectProductFeature = (state: AppState) => state.product;

export const selectProduct = (state: AppState) => state.selectedProduct;

export const selectFeatureCount = createSelector(
    selectProductFeature,
    (state: ProductState) => state.products
);