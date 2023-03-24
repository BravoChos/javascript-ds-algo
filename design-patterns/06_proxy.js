"use strict";
// Proxy Pattern
// 2. Real Subject
class Cash {
    request(amount) {
        console.log("Recieved request from proxy first");
        console.log(`Payment request complete. Amount:${amount}`);
    }
}
const targetObject = new Cash();

// 3. Proxy
const paymentProxy = new Proxy(targetObject, {
    get: (object, prop) => {
        if (prop === "request") {
            console.log("This is payment proxy. Now requesting to real target");
            return object[prop];
        }
        throw new Error("operation not implemented");
    },
});
paymentProxy.request(100);
paymentProxy.add(100); // will throw error, 'add' method is not defined
