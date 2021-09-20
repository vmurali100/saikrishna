import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sib1Component } from './sib1/sib1.component';
import { Sib2Component } from './sib2/sib2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sib1Component,
    Sib2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
