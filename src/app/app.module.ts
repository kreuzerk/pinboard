import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PinboardComponent} from "./pinboard.component";
import {AppComponent} from './app.component';
import {PinComponent} from "./pin.component";
import {RotateDirective} from "./rotate.directive";
import {TooltipDirective} from "./tooltip.directive";
import {DragableDirective} from "./dragable.directive";

@NgModule({
  declarations: [
    AppComponent,
    PinboardComponent,
    PinComponent,
    RotateDirective,
    TooltipDirective,
    DragableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
