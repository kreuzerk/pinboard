import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PinboardComponent} from "./pinboard.component";
import {PinComponent} from "./pin.component";
import {Dragable} from "./dragable.directive";

@NgModule({
  declarations: [
    AppComponent,
    PinboardComponent,
    PinComponent,
    Dragable
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
