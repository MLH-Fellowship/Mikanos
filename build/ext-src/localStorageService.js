"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageService = void 0;
class LocalStorageService {
    constructor(storage) {
        this.storage = storage;
    }
    getValue(key, defaultValue) {
        return this.storage.get(key, defaultValue);
    }
    setValue(key, value) {
        this.storage.update(key, value);
    }
}
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localStorageService.js.map