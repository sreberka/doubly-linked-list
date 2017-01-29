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
        let node = new Node();
        if(this.length === 0){
            this._head = node.next;
            this._tail = node.prev;
        }

    }

    head() {
        if(this.arr.length === 0){
            return null
        }
        else{
            return this.arr[0]
        }

    }

    tail() {
        if(this.arr.length === 0){
            return null
        }
        else{
            return this.arr[this.length - 1]
        }
    }

    at(index) {
        this.index = index;
        return this.arr[this.index];

    }

    insertAt(index, data) {
         this.index = index;
         this.data = data;
         this.arr.splice(this.index, 1, this.data)
    }

    isEmpty() {
        if(this.length === 0){
            return true
        }
        else{
            return false
        }

    }

    clear() {
         this.arr.splice(0, this.length);
         this.length = this.arr.length;
    }

    deleteAt(index) {
        this.index = index;
        return this.arr.splice(this.index, 1)
    }

    reverse() {
        this.arr.reverse()
    }

    indexOf(data) {
        this.data = data;
        return this.arr.indexOf(this.data)
    }
}

module.exports = LinkedList;
