import {Component, Input} from "@angular/core";

@Component({
  selector: 'pin',
  template: `
    <div class="w-10 h-10 rounded-full bg-green-500 {{color}}"></div>
  `
})
export class PinComponent {
  @Input() color: string | undefined;

}
