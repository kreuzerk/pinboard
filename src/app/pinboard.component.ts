import {Component} from "@angular/core";

@Component({
  selector: 'pinboard',
  template: `
    <div class="rounded-lg shadow-lg w-full h-full border-slate-400 border-4">
      <ng-content></ng-content>
    </div>
  `
})
export class PinboardComponent {}
