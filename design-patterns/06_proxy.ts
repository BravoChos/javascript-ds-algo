// Proxy Pattern

// IT is a structural design pattern that provides a surrogate or placeholder
// for another object to control access to it.

// In other words, the Proxy acts as an intermediary between the client and the real object,
// allowing the client to interact with the proxy instead of the real object.

// 1. Subject interface
interface Payment {
    request(amount: number): void;
}

// 2. Real Subject
class Cash implements Payment {
    request(amount: number): void {
        console.log(`payment request complete. Amount:${amount}`);
    }
}

const targetObject = new Cash();
// 3. Proxy
// const proxy = new Proxy(targetObject, handler);
const paymentProxy = new Proxy(targetObject, {
    get: (object, prop) => {
        // console.log();
        if (prop === "request") {
            return object[prop];
        }
        throw new Error("operation not implemented");
    },
});
