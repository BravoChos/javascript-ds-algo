# Prototypes

There are two pillars in JavaScript that are really, really important and powerful.
One was closures and the other is prototypes (specifically prototype inheritance) which will help us to understand Object-Oriented-Programming.

Inheritance is an object getting access to the properties and methods of another object.
Recall, arrays and functions are just objects in JavaScript, and they both get access to the properties and methods of the object through this prototype inheritance.

In C# or Java, they use something called Classical Inheritance while javaScript uses Prototype Inheritance.
Even though in JavaScript we do have the 'class' keyword, there are actually no classes in JavaScript. We only have prototype inheritance.
As a matter of fact, this feature is actually quite unique and not that common in other popular languages.

So what is this whole prototype chain? Why is it useful?
Because using prototypes, we avoid repeating ourselves, we avoid adding the same code over and over and being inefficient with our memory.

// # Note
Protype chains is not same as the scope chains. They work in a similar fashion, but there are two different things.
(please review 'Function Lexical Environment' in scope chain topic )
