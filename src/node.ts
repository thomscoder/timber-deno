
class Node {
    children: Map<string, Node>
    belongs: Array<string|number>
    data: string|undefined;
    isEndOfWord: boolean;

    constructor(data?: string) {
       this.children = new Map();
       this.belongs = [];
       this.data = data;
       this.isEndOfWord = false;
    }
}

export default Node;