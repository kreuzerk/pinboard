import {Directive, HostBinding, Input} from "@angular/core";

@Directive({
  selector: '[rotate]'
})
export class RotateDirective {
  @HostBinding('style.rotate') @Input() rotate: string | undefined;
}
