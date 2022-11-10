import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private positon = 0;
  private positions = [
    {top: 50, left: 50},
    {top: 400, left: 120},
    {top: 180, left: 390},
    {top: 220, left: 800},
    {top: 300, left: 1200},
  ]

  getPosition(parentcoordinates: { left: number, top: number, bottom: number, right: number }): { top: number; left: number } {
    const position = this.positions[this.positon++];
    return {
      top: position.top + parentcoordinates.top,
      left: position.left + parentcoordinates.left
    }
  }
}
