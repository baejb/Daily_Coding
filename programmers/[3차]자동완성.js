class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
            currentNode.count++;
        }
    }
    
    getUniquePrefixLength(word) {
        let currentNode = this.root;
        let prefixLength = 0;
        
        for (let char of word) {
            currentNode = currentNode.children[char];
            prefixLength++;
            if (currentNode.count === 1) { // 유일한 접두사를 찾는 순간
                break;
            }
        }
        
        return prefixLength;
    }
}

function solution(words) {
    let trie = new Trie();
    let answer = 0;

    for (let word of words) {
        trie.insert(word);
    }

    for (let word of words) {
        answer += trie.getUniquePrefixLength(word);
    }

    return answer;
}
