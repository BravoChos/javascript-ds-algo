"use strict";
// Command Pattern
// It is a behavioral design pattern that encapsulates a request as an object,
// thereby allowing for the parameterization of clients with different requests,
// queues or log requests, and supports undoable operations.
// Interface
class ICommand {
}
// Reciever
class State {
    constructor(state) {
        this._state = state;
    }
    getState() {
        return this._state;
    }
    setState(value) {
        this._state = value;
    }
}
// Invoker
class BankManager {
    constructor(state) {
        this._commands = {};
        this._state = state;
    }
    registerCommands(...args) {
        for (const cmd of args) {
            this._commands[cmd.constructor.name] = cmd;
        }
    }
    executeCmd(cmdName, param) {
        this._commands[cmdName].execute(this._state, param);
    }
}
// Command
class Deposit {
    execute(...params) {
        const [state, amount] = params;
        const prevState = state.getState();
        state.setState(prevState + amount);
    }
}
class Withdrawal {
    execute(...params) {
        const [state, amount] = params;
        const prevState = state.getState();
        state.setState(prevState - amount);
    }
}
// Example
// 1. create command
const deposit = new Deposit();
const withdrawal = new Withdrawal();
// 2. create receiver
const state = new State(0);
// 3. register invoker instance & receiver
const bankManager = new BankManager(state);
// 4. register command
bankManager.registerCommands(deposit, withdrawal);
// 5. execute command
bankManager.executeCmd("Deposit", 100);
bankManager.executeCmd("Deposit", 1000);
console.log(state.getState());
bankManager.executeCmd("Withdrawal", 1000);
console.log(state.getState());
