import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ColorService {
  constructor() { }

  public getColorHex(numberInsert: number): string {
    return `#${(Math.floor(16777215 / (numberInsert + 1.000015))).toString(16)}`;
  }
}
