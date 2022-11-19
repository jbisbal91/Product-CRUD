import { Routes } from "@angular/router";
import { ProductRootComponent } from "./product-root.component";

export const ProductRoutes: Routes = [

  {
    path: "",
    children: [
      {
        path: "",
        component: ProductRootComponent,
        data: { title: "Product" },
      }
    ]
  }

];
