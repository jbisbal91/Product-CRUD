import { createSelector } from '@ngrx/store';
import { ProductState } from 'src/app/app-product/models/product.state';
import { AppState } from '../app.state';


  export const selectProductFeature = (state: AppState) => state.product;
   
  export const selectFeatureCount = createSelector(
    selectProductFeature,
    (state: ProductState) => state.products
  );