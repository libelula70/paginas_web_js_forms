import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    MainComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    MainComponent
  ]
})
export class CoreModule { }
