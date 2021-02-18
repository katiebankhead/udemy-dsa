// a stack is just a concept, and has multiple potential implementations

// simple array implementation
let stack = [];

// using push
stack.push("google");
stack.push("instagram");
stack.push("youtube")
console.log(stack);
stack.pop();
stack.pop();
stack.push("amazon")
console.log(stack.pop())

// OR

let stack = [];
stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("updated saturation");
stack.shift();

// both push/pop and unshift/shift work, but push/pop is technically more efficient because not every 
// array index needs to be shifted like in unshift/shift