//////////////////////
// IMPLEMENTATION 1 //
//////////////////////
let queue = [];

// add to the end
queue.push("first")
queue.push("second")
queue.push("third")

// remove from the beginning
// requires re-indexing of all other array elements
queue.shift();
queue.shift();
queue.shift();

//////////////////////
// IMPLEMENTATION 2 //
//////////////////////
let queue2 = [];

// add to beginning
// still requires re-indexing => array is not our best implementation choice
queue2.unshift("first")
queue2.unshift("second")
queue2.unshift("third")

// remove from end
queue2.pop();
queue2.pop();
queue2.pop();