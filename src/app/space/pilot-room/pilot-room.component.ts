import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css'],
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;

  constructor() {}

  ngOnInit(): void {
    this.pilots.push(new Pilot('Maciek Bąk'));
    this.pilots.push(
      new Pilot('Jacek Stramik', '/assets/pilot-in-uniform.jpeg')
    );
  }

  selectPilot(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
  }
}
