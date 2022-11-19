import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidePanelComponent } from './components/left-side-panel/left-side-panel.component';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftSidePanelComponent,
    ContentLayoutComponent,
    MainLayoutComponent,
    NavLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LeftSidePanelComponent,
    ContentLayoutComponent,
    MainLayoutComponent,
    NavLayoutComponent
  ]
})
export class AppLayoutModule { }
