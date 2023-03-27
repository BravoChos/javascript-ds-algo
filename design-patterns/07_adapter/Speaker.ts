import ISmartDevice from "./ISmartDevice";

class Speaker implements ISmartDevice {
    private _device: string;

    constructor() {
        this._device = "Speaker";
    }

    connect() {
        if (this.device) {
            console.log(`connecting: ${this.device}`);
            return true;
        }
        return false;
    }

    get device() {
        return this._device;
    }
}

export default Speaker;
