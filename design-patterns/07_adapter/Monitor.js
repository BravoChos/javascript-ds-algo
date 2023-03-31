"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monitor = /** @class */ (function () {
    function Monitor() {
        this._device = "Monitor";
    }
    Monitor.prototype.makeConnection = function () {
        console.log("connecting: ".concat(this.getDeviceName()));
    };
    Monitor.prototype.getDeviceName = function () {
        return this._device;
    };
    return Monitor;
}());
exports.default = Monitor;
