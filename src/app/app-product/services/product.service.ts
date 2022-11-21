import { Injectable } from '@angular/core';
import { getFirestore,Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  getAllProducts(): Observable<ProductModel[]> {
    const placeRef = collection(this.firestore, 'products');
    return collectionData(placeRef, { idField: 'id' }) as Observable<any>;
  }

  createProduct(product: ProductModel) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  updateProduct(product: any) {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return updateDoc(productRef,product);
  }

  deleteProduct(product: any) {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productRef);
  }

}
