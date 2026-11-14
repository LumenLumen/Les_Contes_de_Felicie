export interface RelationUnique {
    authorId: string;
    targetId: string;
    note: number;         // de 0 à 10
    description: string;
    iconPath: string;
}

export interface Relation {
    id: string;
    characterIds: [string, string];
    opinions: [RelationUnique, RelationUnique];
    imagePaths: string[];
    artists:string[];
}