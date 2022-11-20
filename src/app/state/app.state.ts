import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "../app-product/models/product.state";
import { productsReducers } from "./reducers/product.reducer";

export interface AppState {
    product: ProductState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    product: productsReducers
}