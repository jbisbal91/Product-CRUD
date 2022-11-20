import { Injectable } from '@angular/core'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/app-product/services/product.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductEffects {

    loadPrducts$ = createEffect(() => this.actions$.pipe(
        ofType('[Product List] Load Products'),
        mergeMap(() => this.productService.getAllProducts()
            .pipe(
                map(products => ({ type: '[Product List] Loaded successfully', products: products })),
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }
}