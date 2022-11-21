import { ProductModel } from "./product.interface";

export interface ProductState {
    selectedProduct: any;
    search: any;
    loading: boolean,
    products: ReadonlyArray<ProductModel>
}
