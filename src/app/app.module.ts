import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PinboardComponent} from "./pinboard.component";
import {PingComponent} from "./ping.component";

@NgModule({
  declarations: [
    AppComponent,
    PinboardComponent,
    PingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
