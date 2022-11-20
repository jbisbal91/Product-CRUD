import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectFeatureCount } from 'src/app/state/selectors/product.selectors';
@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  selectedRow: any;
  products$: Observable<any> = new Observable();
  @Output() onclick = new EventEmitter<any>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   this.products$ = this.store.select(selectFeatureCount);
  }

  truncate(description: string) {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  }

  onChangeSelectedRow(selectedRow: any) {
    if (this.selectedRow.id === selectedRow.id) {
      this.selectedRow = null;
      this.onclick.emit(undefined);
    } else {
      this.selectedRow = selectedRow;
      this.onclick.emit(selectedRow);
    }
  }

  ondblclick(row: any) {

  }
}
