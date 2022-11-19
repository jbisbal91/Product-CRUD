import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './app-layout/components/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: "/product",
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () => import('./app-product/app-product.module').then(m => m.AppProductModule),
    component: MainLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
