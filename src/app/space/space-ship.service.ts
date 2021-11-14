import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { OrderFormValue } from './order-form-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type';

@Injectable({
  providedIn: 'root',
})
export class SpaceShipService {
  static shipProductionTime = 2000;
  constructor() {}

  produceShips(formValue: OrderFormValue): Observable<SpaceShip> {
    const shipClass =
      formValue.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValue.shipCount)
    );
  }
}
