export interface TimberTrie {
    insert: (...args: Array<string>) => void;
    delete: (word: string) => void;
    search: (word: string) => string | undefined;
    findAllWords: (word: string) => undefined | Array<string>;
    belongsTo: (word: string) => undefined | Array<string|number>;
}
