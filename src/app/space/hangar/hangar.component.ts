import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot | null = null;
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;
  constructor() {}

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(
      new BomberShip(new Pilot('Artur Bąk', '/assets/pilot.jpeg'))
    );
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new FighterShip(new Pilot('Czarek Smoła')));
  }

  setSelectedPilot(pilot: Pilot | null) {
    this.selectedPilot = pilot;
  }

  assignPilot(spaceShip: SpaceShip) {
    if (!this.selectedPilot) {
      return;
    }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
  }

  deassignPilot(spaceShip: SpaceShip): void {
    if (!spaceShip.pilot) {
      return;
    }
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = undefined;
  }
}
