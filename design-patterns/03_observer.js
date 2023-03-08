// Observer Pattern
// a design pattern frequently used in object-oriented programming.
// reduces dependencies between objects while allowing for easy handling of notifications
// about changes in an object's state.
class Subject {
  constructor() {
    this.observers = [];
  }
  getObserverList() {
    return this.observers;
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name);
      } catch (err) {
        console.log("err is", err);
      }
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(subj) {
    console.log(`${this.name}: notified from ${subj} class!`);
  }
}
