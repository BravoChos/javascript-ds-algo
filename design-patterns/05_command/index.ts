// Command Pattern

// It is a behavioral design pattern that encapsulates a request as an object,
// thereby allowing for the parameterization of clients with different requests,
// queues or log requests, and supports undoable operations.

// Interface
abstract class ICommand {
    abstract execute(args: any): void;
}

// Reciever
class State {
    private _state: number;
    constructor(state: number) {
        this._state = state;
    }

    getState() {
        return this._state;
    }

    setState(value: number) {
        this._state = value;
    }
}

// Invoker
class BankManager {
    private _state;
    private _commands: any = {};
    constructor(state: any) {
        this._state = state;
    }

    registerCommands(...args: any[]) {
        for (const cmd of args) {
            this._commands[cmd.constructor.name] = cmd;
        }
    }

    executeCmd(cmdName: string, param: any) {
        this._commands[cmdName].execute(this._state, param);
    }
}

// Command
class Deposit implements ICommand {
    execute(...params: any): void {
        const [state, amount] = params;
        const prevState = state.getState();
        state.setState(prevState + amount);
    }
}

class Withdrawal implements ICommand {
    execute(...params: any): void {
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
