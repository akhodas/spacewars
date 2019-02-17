export class IdGenerator {
  constructor() {
    this._id = 0;
  }

  getId() {
    this._id += 1;

    return this._id;
  }
}
