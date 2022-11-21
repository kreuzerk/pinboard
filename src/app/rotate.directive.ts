import {Directive, HostBinding, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[rotate]'
})
export class RotateDirective implements OnInit {
  @HostBinding('style.rotate') @Input() rotate: string | undefined;

  ngOnInit(): void {
    if (!this.rotate) {
      console.error('rotate directive requires a rotate attribute');
    }
  }
}
