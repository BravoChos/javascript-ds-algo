import ISmartDevice from "./ISmartDevice";

class SmartHomeClient {
    addConnection(device: ISmartDevice) {
        try {
            device.connect();
            console.log(`connected to ${device.device}`);
        } catch {
            console.error(`error: device connection has failed`);
        }
    }
}

const smartHomeClient = new SmartHomeClient();
