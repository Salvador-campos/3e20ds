class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
unshift(value) {
    const newNode = new Node(value, this.head, null);
    if(this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }
push(value) {
    const newNode = new Node(value, null, this.tail);
    if(this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
shift() {
    if(!this.head) { return null; }
    const oldHeadValue = this.head.value;
    this.head = this.head.next;
      if(this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return oldHeadValue;
  }
  pop() {
    if(!this.tail) { return null; }
    const oldTailValue = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return oldTailValue;
  }
}
const myList = new DoublyLinkedList();
console.log(myList);
myList.unshift('kkwates');
myList.unshift('takitos');
console.log(myList);  
myList.push('wwkates2');
myList.push('takitos2');
console.log(myList);
