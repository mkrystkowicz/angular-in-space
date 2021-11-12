import { Component, OnInit } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  constructor() {}

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new FighterShip());
  }
}
