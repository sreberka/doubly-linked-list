/**
 * Created by Vita on 29.01.2017.
 */
class LinkedList {
    constructor() {
        this.arr = [];
        this.data = null;
    }

    append(data) {
        this.data = data;
        this.arr.push(this.data)
    }

    head() {
        return this.arr[0]
    }

    tail() {
        return this.arr[this.arr.length]
    }

    at(index) {

    }

    insertAt(index, data) {

    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}