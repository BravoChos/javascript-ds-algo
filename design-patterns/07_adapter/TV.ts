import ISmartDevice from "./ISmartDevice";

class TV implements ISmartDevice {
    private _device: string;

    constructor() {
        this._device = "TV";
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

export default TV;
