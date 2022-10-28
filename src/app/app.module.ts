import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PinboardComponent} from "./pinboard.component";
import {TooltipDirective} from "./tooltip.directive";
import { AppComponent } from './app.component';
import {Dragable} from "./dragable.directive";
import {PinComponent} from "./pin.component";

@NgModule({
  declarations: [
    AppComponent,
    PinboardComponent,
    PinComponent,
    TooltipDirective,
    Dragable
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
