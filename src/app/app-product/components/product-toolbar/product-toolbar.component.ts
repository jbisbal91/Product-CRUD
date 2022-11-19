import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'product-toolbar',
  templateUrl: './product-toolbar.component.html',
  styleUrls: ['./product-toolbar.component.scss']
})
export class ProductToolbarComponent implements OnInit {
  @Input() selectedProduct!: any;
  @Input()  onChangeValue: any;
 
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddNewProduct() {
   
  }

  openEditProduct() {
  
  }

  openDeleteProduct() {

  }


}
