"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MonitorAdapter = /** @class */ (function () {
    function MonitorAdapter(target) {
        this._target = target;
    }
    MonitorAdapter.prototype.connect = function () {
        this._target.makeConnection();
        return true;
    };
    Object.defineProperty(MonitorAdapter.prototype, "device", {
        get: function () {
            return this._target.getDeviceName();
        },
        enumerable: false,
        configurable: true
    });
    return MonitorAdapter;
}());
exports.default = MonitorAdapter;
