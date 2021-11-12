export class SpaceShip {
  modelName: string;
  imageUrl: string;

  health = 100;
  activeShields = true;
  activeWeapons = true;

  constructor(modelName: string, imageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }
}
