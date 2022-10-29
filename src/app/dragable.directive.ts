import {Directive, ElementRef, HostBinding, Input, OnInit} from "@angular/core";
import {filter, fromEvent, map, merge, switchMap, takeWhile, tap} from "rxjs";

@Directive({
  selector: '[dragable]'
})
export class Dragable implements OnInit {

  @Input() dragzone: any | undefined;

  @HostBinding('attr.draggable') draggable = 'true';
  @HostBinding('style.position') position = 'absolute';

  private pos1 = 0;
  private pos2 = 0;
  private pos3 = 0;
  private pos4 = 0;

  constructor(private host: ElementRef) {
  }

  ngOnInit(): void {
    if (!this.dragzone) {
      console.warn('Please provide a dragzone!')
      return;
    }

    const mouseDown$ = fromEvent(this.dragzone.nativeElement, 'mousedown').pipe(
      tap((event: any) => {
        this.pos3 = event.clientX;
        this.pos4 = event.clientY;
      }),
      map(() => true),
    );
    const mouseUp$ = fromEvent(this.dragzone.nativeElement, 'mouseup').pipe(
      map(() => false)
    );
    const mouseMove$ = fromEvent(this.host.nativeElement, 'mousemove').pipe(
      filter((event: any) => {
        const boundingRects = this.dragzone.nativeElement.getBoundingClientRect();
        const halfOfElementsWidth = this.host.nativeElement.offsetWidth / 2;
        const halfOfElementsHeight = this.host.nativeElement.offsetHeight / 2;
        return event.clientX - halfOfElementsWidth > boundingRects.left
          && event.clientX + halfOfElementsWidth < boundingRects.right
          && event.clientY - halfOfElementsHeight > boundingRects.top
          && event.clientY + halfOfElementsHeight < boundingRects.bottom;
      }));


    merge(mouseDown$, mouseUp$).pipe(
      switchMap((isMouseDown) =>
        mouseMove$.pipe(takeWhile(() => isMouseDown)
        )
      ),
    ).subscribe((event) => this.updateCoordinates(event));
  }

  private updateCoordinates(event: any) {
    event.preventDefault();
    this.pos1 = this.pos3 - event.clientX;
    this.pos2 = this.pos4 - event.clientY;
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    const hostElement = this.host.nativeElement;
    hostElement.style.top = (hostElement.offsetTop - this.pos2) + "px";
    hostElement.style.left = (hostElement.offsetLeft - this.pos1) + "px";
  }
}
