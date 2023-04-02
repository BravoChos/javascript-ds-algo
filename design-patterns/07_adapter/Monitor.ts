interface IMonitor {
    makeConnection(): void;
    getDeviceName(): string;
}
class Monitor implements IMonitor {
    private _device: string;

    constructor() {
        this._device = "Monitor";
    }

    makeConnection() {
        console.log(`connecting: ${this.getDeviceName()}`);
    }

    getDeviceName() {
        return this._device;
    }
}

export default Monitor;
