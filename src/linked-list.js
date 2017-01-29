const Node = require('./node');

class LinkedList {
    constructor() {
        this.arr = [];
        this.data = null;
        this.length = this.arr.length;
    }

    append(data) {
        this.data = data;
        this.arr.push(this.data);
        this.length++;
        let node = new Node(this.data, this._head, this._tail);
        if(this.length === 0){
            this._head = node.prev;
            this._tail = node.next;
        }
    }

    head() {
        return this.arr[0]
    }

    tail() {
        return this.arr[this.arr.length - 1]
    }

    at(index) {

    }

    insertAt(index, data) {

    }

    isEmpty() {
        if(this.arr.length === 0){
            return true
        }

    }

    clear() {}

    deleteAt(index) {
        this.index = index;
        return this.arr.splice(this.index, 1)
    }

    reverse() {
        this.arr.reverse()
    }

    indexOf(data) {}
}

module.exports = LinkedList;
