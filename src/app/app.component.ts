import {Component, ElementRef, ViewChild} from '@angular/core';
import {PinboardComponent} from "./pinboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(PinboardComponent, {read: ElementRef, static: true}) pinboard: ElementRef | undefined;
  pins = [
    {rotate: '45deg', tooltip: 'Ship new products', image: 'rocket'},
    {rotate: '-20deg', tooltip: 'A good beer after a day of coding', image: 'beer'},
    {rotate: '0deg', tooltip: 'My favourite keyboard, the Moonlander', image: 'keyboard'},
    {rotate: '10deg', tooltip: 'Write tests to improve the quality of your code', image: 'testing'},
    {rotate: '25deg', tooltip: 'No coffee no code', image: 'coffee'},
  ];
  grabbed = false;


  pinGrabbed() {
    this.grabbed = true;
  }

  pinReleased() {
    this.grabbed = false;
  }
}
