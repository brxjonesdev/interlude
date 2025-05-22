export type Loop = {
    id: number
    name: string
    description?: string
    owner: string
    ownerId: number | string
    repoID: number
    createdAt: string
    updatedAt: string
    updates: Update[]
}

export type Update = {
    id: number
    loopId: number
    type: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
}

export type LoopCreation = {
    name: string
    description?: string
    owner: string
    ownerId: number
    repoID: number
}

export function createNewLoop(
    name: string,
    ownerId: number | string,
    description: string,
    owner: string,
    repoID: number,
): Loop {
    return {
        id: Date.now(),
        name,
        description,
        repoID,
        owner,
        ownerId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        updates: []
    }
}