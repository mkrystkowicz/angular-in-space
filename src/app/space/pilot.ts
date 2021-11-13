export class Pilot {
  private _firstName: string = '';
  private _lastName: string = '';
  imageUrl: string = '';

  static unknownPilot = '/assets/unknown-pilot.png';

  get fullname(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullname(value: string) {
    const fullVal = value.split(' ');
    this._firstName = fullVal[0];
    this._lastName = fullVal[1];
  }

  constructor(fullName: string, imageUrl: string = Pilot.unknownPilot) {
    this.fullname = fullName;
    this.imageUrl = imageUrl;
  }
}
