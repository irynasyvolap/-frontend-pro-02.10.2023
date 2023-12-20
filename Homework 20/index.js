"use strict";

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  add(value) {
    const newNode = new Node(value, this.tail);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size++;
  }

  remove(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }

        this.size--;
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push({
        value: currentNode.value,
        prev: currentNode.prev ? { value: currentNode.prev.value } : null,
        next: currentNode.next ? { value: currentNode.next.value } : null,
      });

      currentNode = currentNode.next;
    }

    return result;
  }
}

const myList = new DoublyLinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
console.log("Size:", myList.getSize());
console.log("Head:", myList.getHead());
console.log("List:", myList.toArray());

myList.remove(2);
console.log("Size after removal:", myList.getSize());
console.log("List after removal:", myList.toArray());

const searchResult = myList.search(3);
console.log("Search result:", searchResult);
