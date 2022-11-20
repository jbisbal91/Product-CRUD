import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadProducts } from 'src/app/state/actions/product.actions';
@Component({
  selector: 'app-product-root',
  templateUrl: './product-root.component.html',
  styleUrls: ['./product-root.component.scss']
})
export class ProductRootComponent implements OnInit {
 
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
  }

}
