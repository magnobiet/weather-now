import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '~/shared/shared.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

const MODULE_COMPONENTS = [
  CurrentWeatherComponent,
  HomeComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  HomeRoutingModule
];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_COMPONENTS
  ]
})
export class HomeModule { }
