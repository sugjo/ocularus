export type Store = {
    pathsMap: Record<string, Path>;
    pathsIds: string[];
}

export type Path = {
    path: string;
    isActive: boolean;
}

export type Result = {
    name: string;
    path: string;
}
