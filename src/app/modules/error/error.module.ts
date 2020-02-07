import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const MODULE_COMPONENTS = [
  NotFoundComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  ErrorRoutingModule
];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  imports: [
    ...MODULE_MODULES
  ]
})
export class ErrorModule { }
