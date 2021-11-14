import { Component, OnInit, ViewChild } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  selectedPilot: Pilot | null = null;
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;
  spaceShips = this.spaceShipService.hangarShips;
  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit(): void {}

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
