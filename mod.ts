import { TimberTrie } from './utils/interfaces.ts';

import Node from './src/node.ts';

class Timber implements TimberTrie {

    private root: Node | null;

    constructor() {
        this.root = null;
    }

    private insertArray(identifier: string | number, args: Array<string>): void {
        if (this.root === null) {
            this.root = new Node();
        }
        for (let i = 0, len = args.length; i < len; ++i) {
            let currentNode = this.root;
            const currentWord = args[i];
            for (let j = 0, len = currentWord.length; j < len; ++j ) {
                const char = currentWord[j];
                if (!currentNode.children.has(char)) {
                    currentNode.children.set(char, new Node(char));
                }
                currentNode = (currentNode.children.get(char) as Node);
                currentNode.belongs.push(identifier);
            }
            currentNode.isEndOfWord = true;
        }
    }
    
    private insertSingleWord(identifier: string | number, args: string): void {
        if (this.root === null) {
            this.root = new Node();
        }
        let currentNode = this.root;
            for (let j = 0, len = args.length; j < len; ++j ) {
                const char = args[j];
                if (!currentNode.children.has(char)) {
                    currentNode.children.set(char, new Node(char));
                }
                currentNode = (currentNode.children.get(char) as Node);
                currentNode.belongs.push(identifier);
            }
            currentNode.isEndOfWord = true;
    }

    /** Stores either a single word or an array of words. */
    insert(identifier: string | number, args: Array<string> | string) {
        if (Array.isArray(args)) return this.insertArray(identifier, args);
        return this.insertSingleWord(identifier, args);
    }

    /** Deletes the given word from the trie. */
    delete(word: string): void {
        if (this.root === null) return;
        let currentNode = this.root;

        for (let i = 0; i < word.length; ++i) {
            const char = word[i];
            if (!currentNode.children.has(char)) return;
            currentNode = (currentNode.children.get(char) as Node);
        }
        currentNode.isEndOfWord = false;
        if (currentNode.children.size === 0) return;
        return
    }
    /** Returns the word that matches the given word
     * If the word is not in the trie, returns undefined.
     * If the word is in the trie, returns an array of words.
    */
    search(word: string): string | undefined {
        if (this.root === null) return undefined;
        let currentNode = this.root;
        for (let i = 0, len = word.length; i < len; ++i) {
            const char = word[i];
            currentNode = currentNode.children.get(char)!;
            if (!currentNode) break;
        }
        if (currentNode?.isEndOfWord) return word;
        return undefined;
    }
    /** Returns all the word that start with the given prefix
     * If the prefix is not in the trie, returns undefined.
     * If the prefix is in the trie, returns an array of words. (not including the prefix)
    */
    findAllWords(word: string): (undefined | string[]) {
        if (this.root === null) return undefined;
        let currentNode = this.root;
        const result: string[] = [];
        for (let i = 0, len = word.length; i < len; ++i) {
            const char = word[i];
            if (!currentNode) return result;
            currentNode = (currentNode.children.get(char) as Node);
        }
        this.helper(currentNode, result, word.substring(0, word.length));
        return result;
    }
    private helper(currentNode: Node, result: string[], word: string) {
        if (currentNode.isEndOfWord) {
            return result.push(word);
        }
        for (const [key, value] of currentNode.children) {
            this.helper(value, result, word + key);
        }
    }
    /** Returns the variable it belongs to.
     * If the word is not in the trie, returns undefined.
     * If the word is in the trie, returns an array of variables.
    */
    belongsTo(word: string): (undefined | Array<string|number>) {
        if (this.root === null) return undefined;
        let currentNode = this.root;
        for (let i = 0; i < word.length; ++i) {
            const char = word[i];
            if (!currentNode) return undefined;
            currentNode = (currentNode.children.get(char) as Node);
        }
        return currentNode.belongs;
    }
}

export default Timber;