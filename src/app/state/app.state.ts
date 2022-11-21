import { ActionReducerMap } from "@ngrx/store";
import { ProductModel } from "../app-product/models/product.interface";
import { ProductState } from "../app-product/models/product.state";
import { productsReducers } from "./reducers/product.reducer";

export interface AppState {
    product: ProductState;
    selectedProduct: ProductState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    product: productsReducers,
    selectedProduct:productsReducers
}