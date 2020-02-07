import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

const MODULE_MODULES = [
  HomeModule
];

@NgModule({
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_MODULES
  ]
})
export class ModulesModule { }
