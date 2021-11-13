export class Pilot {
  private _firstName: string = '';
  private _lastName: string = '';
  imageUrl: string = '';

  static unknownPilot = '/assets/unknown-pilot.png';

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value: string) {
    const fullVal = value.split(' ');
    this._firstName = fullVal[0];
    this._lastName = fullVal[1];
  }

  constructor(fullName: string, imageUrl: string = Pilot.unknownPilot) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
  }
}
