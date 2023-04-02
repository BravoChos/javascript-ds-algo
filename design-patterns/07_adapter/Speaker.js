"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Speaker = /** @class */ (function () {
    function Speaker() {
        this._device = "Speaker";
    }
    Speaker.prototype.connect = function () {
        if (this.device) {
            console.log("connecting: ".concat(this.device));
            return true;
        }
        return false;
    };
    Object.defineProperty(Speaker.prototype, "device", {
        get: function () {
            return this._device;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
exports.default = Speaker;
