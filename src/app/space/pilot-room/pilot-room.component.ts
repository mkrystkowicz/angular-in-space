import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css'],
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;
  @Output() selected = new EventEmitter<Pilot | null>();

  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => (this.pilots = pilots),
      error: () => alert('Nie udało się pobrać pilotów'),
    });
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
