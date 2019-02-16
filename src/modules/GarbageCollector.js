export class GarbageCollector {
    constructor() {
        this._collection = [];
    }

    removeEntities(entities) {
        const filtered = entities.filter((entity) => {
            return !this._collection.includes(entity.id);
        });

        this._collection = [];

        return filtered;
    }

    collect(id) {
        this._collection.push(id);
    }
}