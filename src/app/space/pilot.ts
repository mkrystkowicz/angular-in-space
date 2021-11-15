export interface PilotAttrs {
  id?: number;
  firstname: string;
  lastname: string;
  imageUrl: string;
}

export class Pilot {
  id?: number;
  firstName: string = '';
  lastName: string = '';
  imageUrl: string = '';

  static defaultImageUrl = '/assets/unknown-pilot.png';

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const fullVal = value.split(' ');
    this.firstName = fullVal[0];
    this.lastName = fullVal[1];
  }

  constructor(attrs: PilotAttrs) {
    this.id = attrs.id;
    this.firstName = attrs.firstname;
    this.lastName = attrs.lastname;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }
}
