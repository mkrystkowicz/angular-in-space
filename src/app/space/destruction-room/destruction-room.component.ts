import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css'],
})
export class DestructionRoomComponent implements OnInit {
  spaceShips = this.spaceShipService.hangarShips;
  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit(): void {}

  shipIndexControl = new FormControl(null);

  orderDestruction() {
    const val = this.shipIndexControl.value;
    this.spaceShipService.removeShip(val);
    this.shipIndexControl.reset();
  }
}
