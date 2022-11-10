import {Component, ElementRef, Input, OnInit, SkipSelf} from "@angular/core";

import {PositionService} from "./position.service";

@Component({
  selector: 'pin',
  template: `
    <img [src]="'assets/' + image + '.svg'"/>
  `,
  styles: [`
    img {
      width: 250px;
      height: 250px;
      cursor: grab;
    }
  `]
})
export class PinComponent implements OnInit {
  @Input() color: string | undefined;
  @Input() image: string | undefined;

  constructor(@SkipSelf() private pinboard: ElementRef, private host: ElementRef, private positionService: PositionService) {
  }

  ngOnInit(): void {
    const boundingRects = this.pinboard.nativeElement.getBoundingClientRect();
    const {top, left} = this.positionService.getPosition(boundingRects);
    this.host.nativeElement.style.top = `${top}px`;
    this.host.nativeElement.style.left = `${left}px`;
  }
}
