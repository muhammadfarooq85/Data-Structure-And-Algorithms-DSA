// N array data strcuture

// pronouned as "en-air-tree"
// N refers to number of children
// ary is "arity" indicates the number of children of a node can have

// each node can have n number of node
// but in binary tree node are two
// more flexible than binary tree

// key characterstics
// each node contain data and address to the next node
// root node is top most node of the tree
// a node can have n number of childrens means without limitation yes but at some point there may be limitation

// levels
// trees grows downward in the level. Root has level 0.

// leaf node
// lat node that have no children

// height
// longest path from the root to leaf node

// n array tree can be fixed or non-fixed. It depends on us:

// usage:
// family chart
// organization chart

// n array vs binary tree
// binary tree grows deeper while n-array tree grows broader
// n-array is used to store horearchical strcuture

// no inbuilt support for this

// operations
// add/insert
// traversal (Breadth first/depth first)

// breadth first means you start the searching from the root node visit all the node at the current level before proceeding to the next

// depth first means starting search from the root node move to the first unvisited child if no unvisited child then backtrack the parent and explore the next child.

class nArrayTreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class nArrayTree {
    constructor() {
        this.root = null
    }

    add(parentValue, value) {
        const newNode = new nArrayTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        const parent = this.findNode(this.root, parentValue)
        if (!parent) {
            console.log(`Could not find parent with parent value${parentValue}!`);
        }
        parent.children.push(newNode);
        console.log("this.root ===>", this.root);
        console.log("this.root ===>", this.root.children[0].children);
    }

    findNode(node, value) {
        if (!node) {
            return null
        }
        if (node.value === value) {
            return node
        }
        for (let child of node.children) {
            const result = this.findNode(child, value)
            if (result) {
                return result
            }
        }
        return null
    }


    breadthFirst() {
        if (!this.root) {
            return console.log("Tree is empty!");
        }

        const qeue = [this.root];
        while (qeue.length > 0) {
            const current = qeue.shift()
            console.log(current);
            qeue.push(...current.children);
        };
    };

    depthFirst(node = this.root) {
        if (!node) {
            return null
        }
        console.log("node.value ===>", node.value);
        for (let child of node.children) {
            this.depthFirst(child);
        };
    };
};

const nArrayTreeInstance = new nArrayTree();
nArrayTreeInstance.add(null, "A")
nArrayTreeInstance.add("A", "B")
nArrayTreeInstance.add("A", "C")
nArrayTreeInstance.add("A", "D")
nArrayTreeInstance.add("B", "E")
nArrayTreeInstance.add("B", "F")
nArrayTreeInstance.add("B", "G")
nArrayTreeInstance.breadthFirst()
nArrayTreeInstance.depthFirst()
