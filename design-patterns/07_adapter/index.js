"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monitor_1 = require("./Monitor"); // 다른 vendor device
var MonitorAdapter_1 = require("./MonitorAdapter");
var TV_1 = require("./TV");
var Speaker_1 = require("./Speaker");
var SmartHomeClient = /** @class */ (function () {
    function SmartHomeClient() {
    }
    SmartHomeClient.prototype.addConnection = function (device) {
        try {
            device.connect();
            console.log("connected to ".concat(device.device));
        }
        catch (_a) {
            console.error("error: device connection has failed");
        }
    };
    return SmartHomeClient;
}());
var smartHomeClient = new SmartHomeClient();
smartHomeClient.addConnection(new TV_1.default());
smartHomeClient.addConnection(new Speaker_1.default());
smartHomeClient.addConnection(new MonitorAdapter_1.default(new Monitor_1.default()));
