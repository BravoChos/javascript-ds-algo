import ISmartDevice from "./ISmartDevice";
import Monitor from "./Monitor"; // 다른 vendor device
import MonitorAdapter from "./MonitorAdapter";

import TV from "./TV";
import Speaker from "./Speaker";

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
smartHomeClient.addConnection(new TV());
smartHomeClient.addConnection(new Speaker());
smartHomeClient.addConnection(new MonitorAdapter(new Monitor()));
