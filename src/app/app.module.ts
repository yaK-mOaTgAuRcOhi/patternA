import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootComponent } from './foot/foot.component';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';
import { DemoMaterialModule } from '../app/material-module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FootComponent,
    MenuComponent,
    HeadComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
