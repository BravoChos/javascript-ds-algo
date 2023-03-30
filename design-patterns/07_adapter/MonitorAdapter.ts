import ISmartDevice from "./ISmartDevice";
import Monitor from "./Monitor";

class MonitorAdapter implements ISmartDevice {
    private _target;

    constructor(target: Monitor) {
        this._target = target;
    }

    connect() {
        this._target.makeConnection();
        return true;
    }

    get device() {
        return this._target.getDeviceName();
    }
}
export default MonitorAdapter;
