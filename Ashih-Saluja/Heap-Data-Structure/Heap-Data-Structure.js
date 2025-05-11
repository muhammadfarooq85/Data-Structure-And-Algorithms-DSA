// Heap Tree Data Structure

// only two childrens per node
// each level must be filled before going to next one
// node are added from left to right

// Max Heap
// where parent node is greater than or equal to its children

// Min Heap
// where parent node is less than or equal to its children

// Bubble up
// if parent value is less than children then swap happens and it is known as bubble up.

// Implementation
// no inbuilt support in js
// we will use array for this

// Parent calculation
// (i - 1 / 2)

// left chilf calculation
// 2i + 1

// right chilf calculation
// 2i + 2

// Bubble up after insertion
// insert the new element
// compare with parent
// min heap meand parent is less or equal to its children
// max heap meand parent is greater or equal to its children
// do swap untill the heap restored or element becomes root

// Bubble down after deletion
// we will remove the root element and take the last node to root then also compare
// swap if needed

class maxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return (2 * index) + 1;
    }

    getRightChild(index) {
        return (2 * index) + 2;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp;

        // with destructuring assignment
        // [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

}