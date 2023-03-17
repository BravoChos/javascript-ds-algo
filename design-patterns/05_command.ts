// Command Pattern

// It is a behavioral design pattern that encapsulates a request as an object,
// thereby allowing for the parameterization of clients with different requests,
// queues or log requests, and supports undoable operations.

// Interface
abstract class ICommand {
    abstract execute(args): void;
}

// Reciever
class State {
    private _state: number;
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
    private _state;
    private _commands = {};
    constructor(state) {
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
class Deposit implements ICommand {
    execute(...params): void {
        const [state, amount] = params;
        const prevState = state.getState();
        state.setState(prevState + amount);
    }
}

class Withdrawal implements ICommand {
    execute(...params): void {
        const [state, amount] = params;
        const prevState = state.getState();
        state.setState(prevState - amount);
    }
}
