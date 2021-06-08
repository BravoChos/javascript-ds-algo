# Closure

It's time to learn the first pillar of JavaScript.
Closure's give you superpowers if you understand them deeply as a programmer.

There are two concepts needed to better understand closure.

1. Functions are a first-class citizen. We can pass functions around like data, like any other type in JavaScript.
2. Lexical scope allows JavaScript engine to know, based on where our code is written before we even run the code, what variables each function has access to.

Closure is simply that a combination of function and the lexical environment from which it was declared. Closures allow a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.

So the closure is also called lexical scoping. Lexical means where it is written. Scoping is what variable we have access to. So by that definition, that means the JavaScript engine, before we run any code, knows which function has access to which variables because JavaScript is lexically scoped or statically scoped. Where we write the function matters because of this idea of lexical scope, not where we call the function or where we invoke the function.

This works because these values are not on the call stack. Instead, they're on the memory heap. The heap gets cleaned up by the garbage collection, but the JavaScript engine does not clean these variables this is still needed or being used.

## Why So Serious?
1. memory efficient
2. encapsulation

## Conclution

Closures allow a function to access variables from an enclosing scope or outer scope environment, even after it leaves the scope in which it was declared, because all that matters in JavaScript is where the function was written.
