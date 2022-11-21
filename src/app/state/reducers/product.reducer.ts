import { createReducer, on } from '@ngrx/store';
import { ProductState } from 'src/app/app-product/models/product.state';
import { getAllProducts, loadProducts, selectedProduct } from '../actions/product.actions';


export const initialState: ProductState = { loading: false, products: [] , selectedProduct}

export const productsReducers = createReducer(
    initialState,
    on(loadProducts, (state) => {
        return { ...state, loading: true };
    }),
    on(getAllProducts, (state, { products }) => {
        return { ...state, loading: false, products };
    }),
    on(selectedProduct, (state, { selectedProduct }) => {
        return { ...state, loading: false, selectedProduct };
    })
)