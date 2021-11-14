import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css'],
})
export class EngineersRoomComponent implements OnInit {
  spaceShipTypes: ShipType[] = [
    { label: 'Myśliwiec', value: SpaceShipType.Fighter },
    { label: 'Bombowiec', value: SpaceShipType.Bomber },
  ];
  form!: FormGroup;
  isProducing: boolean = false;
  @Output() shipProduced = new EventEmitter<SpaceShip>();
  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType.Fighter, {
        validators: [Validators.required],
      }),
      shipCount: new FormControl(1, {
        validators: [Validators.required, Validators.min(1), Validators.max(5)],
      }),
    });
  }

  orderSpaceShips(formValue: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue).subscribe({
      next: (ship) => this.shipProduced.emit(ship),
      complete: () => (this.isProducing = false),
    });
  }
}
