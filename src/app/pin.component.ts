import {Component, ElementRef, Input, OnInit, SkipSelf} from "@angular/core";

@Component({
  selector: 'pin',
  template: `
    <img [src]="'assets/' + image + '.svg'"/>
  `,
  styles: [`
    img {
      width: 250px;
      height: 250px;
    }
  `]
})
export class PinComponent implements OnInit {
  @Input() color: string | undefined;
  @Input() image: string | undefined;

  constructor(@SkipSelf() private pinboard: ElementRef, private host: ElementRef) {
  }

  ngOnInit(): void {
    let {left, right, top, bottom} = this.pinboard.nativeElement.getBoundingClientRect();
    const {height} = this.host.nativeElement.getBoundingClientRect();

    bottom = bottom - height;
    right = right - height;
    left = left + height;
    top = top + height;

    const randomXPosition = Math.floor(Math.random() * (right - left + 1) + left);
    const randomYPosition = Math.floor(Math.random() * (bottom - top + 1) + top);

    this.host.nativeElement.style.top = `${randomYPosition}px`;
    this.host.nativeElement.style.left = `${randomXPosition}px`;
  }
}
