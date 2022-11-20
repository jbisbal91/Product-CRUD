import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
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

  createProduct(product: any) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  deleteProduct(product: any) {
    const productRef = doc(this.firestore, `places/${product.id}`);
    return deleteDoc(productRef);
  }

}
