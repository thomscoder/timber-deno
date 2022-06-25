export type TimberNode = {
    children: Map<string, TimberNode>;
    belongs: Record<string, unknown>;
    data: string;
    isEndOfWord: boolean;
}
