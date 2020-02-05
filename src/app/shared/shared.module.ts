import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

const MODULE_COMPONENTS = [
  BrandComponent,
  PageHeaderComponent,
  PageFooterComponent,
  LayoutComponent,
  LoaderComponent
];

const MODULE_MODULES = [
  CommonModule,
  HttpClientModule,
  RouterModule
];

const MODULE_PROVIDERS = [];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  providers: [
    ...MODULE_PROVIDERS
  ],
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_MODULES,
    ...MODULE_COMPONENTS
  ]
})
export class SharedModule { }
