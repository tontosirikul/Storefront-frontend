import { Injectable } from '@angular/core';
import { Info } from 'src/app/model/Info';
@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  info: Info = new Info();
  constructor() {}
  addOrderInfo(info: Info): void {
    this.info = info;
    console.log(this.info);
  }
  getInfo(): Info {
    return this.info;
  }
}
