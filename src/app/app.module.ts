import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoNg6LibModule } from 'demo-ng6-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoNg6LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
