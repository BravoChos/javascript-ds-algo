// Command Pattern

// It is a behavioral design pattern that encapsulates a request as an object,
// thereby allowing for the parameterization of clients with different requests,
// queues or log requests, and supports undoable operations.

// Interface
abstract class ICommand {
    abstract execute(args): void;
}
