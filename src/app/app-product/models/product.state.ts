import { ProductModel } from "./product.interface";

export interface ProductState {
    selectedProduct: any;
    loading: boolean,
    products: ReadonlyArray<ProductModel>
}
