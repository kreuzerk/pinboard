import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PinboardComponent} from "./pinboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(PinboardComponent, {read: ElementRef, static: true}) pinboard: ElementRef | undefined;
}
