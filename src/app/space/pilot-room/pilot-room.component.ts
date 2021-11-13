import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css'],
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;
  @Output() selected = new EventEmitter<Pilot | null>();

  constructor() {}

  ngOnInit(): void {
    this.pilots.push(new Pilot('Maciek Bąk'));
    this.pilots.push(
      new Pilot('Jacek Stramik', '/assets/pilot-in-uniform.jpeg')
    );
  }

  selectPilot(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave(pilot: Pilot): void {
    const index = this.pilots.indexOf(pilot);
    this.pilots.splice(index, 1);
    this.selectPilot(null);
  }

  pilotReturn(pilot: Pilot): void {
    this.pilots.push(pilot);
  }
}
