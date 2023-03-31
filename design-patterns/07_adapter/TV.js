"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TV = /** @class */ (function () {
    function TV() {
        this._device = "TV";
    }
    TV.prototype.connect = function () {
        if (this.device) {
            console.log("connecting: ".concat(this.device));
            return true;
        }
        return false;
    };
    Object.defineProperty(TV.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: false,
        configurable: true
    });
    return TV;
}());
exports.default = TV;
