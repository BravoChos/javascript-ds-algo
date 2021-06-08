# Function

The function is a special type of object.
It has an piece of written code, an optional name property, arguments, and its own properties, and we can use `__proto__` link up to the prototype.

`**Only functions have the prototype property.**`

It can pass them around like objects, and allows us to store them as data as well.

When we define our functions and the compiler looks at our code lexically. And it determines what variables are available for us in our variable environment. And it also add our scope chains.

A function declaration is something that starts with the function keyword.
This function is defined at runtime when we actually run the function or called the function or execute the function or invoke the function.

A function expression, on the other hand, doesn't start with the function keyword instead sets the variable equal to the function. This function gets defined at parse time.
That is when the compiler initially looks at the code and starts hoisting and allocating memory.

Function invocation is simply executing a function. When calling a function, we get the 'arguments' keyword.

On top of the execution context of this and arguments, we also have a little space called variable environment.
This is a place that variables can live in different stack worlds.
