// Trie Data Structure

// trie word comes from retrieval
// used for fast data retrieval
// efficient storage for string

// string vs character
// string is a textual data like "farooq" or "ahmed"
// string is a collection of character
// character is like "f", "a", "r", "o", "o", "q"

// in trie each node represent a character of node
// root node is empty and do not store any character
// words are stored from linking the characters from root to the node
// end of word is stored with a special flag `isEndOfTheWord`

// there is no inbuilt support in js
// we will built our own class for this

class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    };

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            };
            node = node.children[char];
        };
        node.isEndOfWord = true;
        console.log(this.root);
    };

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                console.log(false);
                return;
            };
            node = node.children[char];
        }
        console.log(node.isEndOfWord);
    }


    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                console.log(false);
                return;
            };
            node = node.children[char];
        };
        console.log(true);
    };

    search(prefix) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    findWordsWithPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }

            node = node.children[char];
        }

        let result = [];
        this.collectWords(node, prefix, result);
        return result;
    }

    collectWords(node, currentWord, result) {
        if (node.isEndOfWord) {
            result.push(currentWord);
        }

        console.log(currentWord);
        for (let char in node.children) {
            this.collectWords(node.children[char], currentWord + char, result);
        };
    };
};
const trie = new Trie()
trie.insert("hello")
trie.search("hell")
trie.insert("hell")
trie.search("hell")
trie.startsWith("help")