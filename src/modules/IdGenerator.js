export class IdGenerator {
    constructor() {
        this._id = 0;
    }

    getId() {
        return this._id++;
    }
}