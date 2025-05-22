

export type Loop = {
    id: string
    name: string
    description?: string
    owner: string
    ownerID: number | string
    repoID: number
    created_at: string
    updated_at: string
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
