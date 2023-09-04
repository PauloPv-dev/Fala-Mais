import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SenjuLessPageComponent } from './pages/senju-less-page/senju-less-page.component';
import { SenjuPageComponent } from './pages/senju-page/senju-page.component';
import { PromocaoFaleMaisComponent } from './pages/promocao-fale-mais/promocao-fale-mais.component';

import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { PromocaoFaleMaisListComponent } from './pages/promocao-fale-mais-list/promocao-fale-mais-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    PagesComponent,
    SenjuLessPageComponent,
    SenjuPageComponent,
    PromocaoFaleMaisComponent,
    PromocaoFaleMaisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
