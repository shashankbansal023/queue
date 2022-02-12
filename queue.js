
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(!this.length){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.length){
            return ;
        }
        if(this.first=== this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    peek(){
        return this.first;
    }

    isEmpty(){
        if(this.length){
            return this;
        }else{
            return "the queue is empty";
        }
    }
}

const queue1 = new Queue();
// console.log(queue1.isEmpty());
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.dequeue();
console.log(queue1);
console.log(queue1.peek());

