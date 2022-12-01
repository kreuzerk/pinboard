import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from "@angular/core";
import {filter, fromEvent, map, merge, switchMap, takeWhile, tap} from "rxjs";

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements OnInit {
  @Input() dragZone: any | undefined;

  @HostBinding('attr.draggable') draggable = 'true';
  @HostBinding('style.position') position = 'absolute';

  @Output() dragStart = new EventEmitter();
  @Output() dragEnd = new EventEmitter();

  private pos1 = 0;
  private pos2 = 0;
  private pos3 = 0;
  private pos4 = 0;

  @HostListener('mousedown', ['$event'])
  onDragStart(event: any) {
    this.dragStart.emit(event);
  }

  @HostListener('mouseup', ['$event'])
  onDragEnd(event: any) {
    this.dragEnd.emit(event);
  }

  constructor(private host: ElementRef) {
  }

  ngOnInit(): void {
    if (!this.dragZone) {
      console.warn('dragable directive requires a dragZone attribute');
      return;
    }

    const mouseDown$ = fromEvent(this.dragZone.nativeElement, 'mousedown').pipe(
      tap((event: any) => {
        this.pos3 = event.clientX;
        this.pos4 = event.clientY;
      }),
      map(() => true),
    );
    const mouseUp$ = fromEvent(this.dragZone.nativeElement, 'mouseup').pipe(
      map(() => false)
    );
    const mouseMove$ = fromEvent(this.host.nativeElement, 'mousemove').pipe(
      filter((event: any) => {
        const boundingRects = this.dragZone.nativeElement.getBoundingClientRect();
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