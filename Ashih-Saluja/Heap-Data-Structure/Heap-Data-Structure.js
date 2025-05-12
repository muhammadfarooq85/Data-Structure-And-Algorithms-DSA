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

class MaxHeap {
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

    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        let parentIndex = this.getParentIndex(index);
        while (index > 0 && (this.heap[index] > this.heap[parentIndex])) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = this.getParentIndex(index)
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap[0];
        }

        const firstValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0)
        return firstValue;
    }

    bubbleDown(index) {
        let largest = index;
        let leftChild = this.getLeftChild(index);
        let rightChild = this.getRightChild(index);
        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        } if (leftChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            this.swap(largest, index);
            this.bubbleDown(largest);
        }
    }

    peek() {
        if (this.heap.length === 0) {
            return null
        }
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    print() {
        console.log(this.heap);

    }
}

const maxHeap = new MaxHeap()
maxHeap.add(10)
maxHeap.add(15)
maxHeap.add(5)
maxHeap.add(7)
maxHeap.add(40)
maxHeap.add(50)
maxHeap.add(60)
maxHeap.print()
