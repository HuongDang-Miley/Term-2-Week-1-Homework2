// Stack Class
// There must be an array to represent the stack at start and it will initialize empty
// Stacks typically are built with the following methods
// 1) Push method adds to the top of the stack
// 2) Pop method removes from the top of the stack
// 3) Peek logs the top element on the stack
// 4) isEmpty returns true if the stack is empty


class Stack {
    constructor() {
        this.arr = []
    }

    push(item) {
        this.arr.push(item)
    }

    pop(item) {
        this.arr.pop(item)
    }

    peek() {
        console.log(this.arr[0])
    }

    isEmpty(){
        return arr.length === 0
    }
}

// TEST stack
let arr = new Stack()
arr.push(2)
arr
arr.push('hi')
arr
arr.pop()
arr
arr.peek()
let check = arr.isEmpty()
check


// Queue Class
// There must be an array to represent the queue and it will initialize empty
// Queues typically are built with the following methods
// 1) Enqueue method adds to the back of the queue
// 2) Dequeue method removes from the front of the queue
// 3) Front logs the element at the front of the queue
// 4) isEmpty return true if the queue is empty
// 5) printQueue returns a string of items in the queue separated by commas

class Queue{
    constructor(){
        this.arr = []
    }

    enqueue(item){
        this.arr.push(item)
    }

    dequeue(){
        this.arr.shift()
    }

    front(){
        console.log(this.arr[0])
    }

    isEmpty(){
        return this.arr.length === 0
    }

    printQueue(){
        return this.arr.join(',')
    }
}

// Test Queue
let arr2 = new Queue
arr2.enqueue('hello','there')
arr2.enqueue(5)
arr2
arr2.dequeue()
arr2
arr2.front()
let check2 = arr2.isEmpty()
check2
arr2
let print = arr2.printQueue()
print
