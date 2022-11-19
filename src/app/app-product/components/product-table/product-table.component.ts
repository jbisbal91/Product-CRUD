import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  products: any[] = [];
  selectedRow: any;
  @Output() onclick = new EventEmitter<any>();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  truncate(description: string) {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
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

  ondblclick(row:any) {
  
  }
}
