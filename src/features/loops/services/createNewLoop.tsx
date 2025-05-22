import { err, ok, Result } from '@/shared/types/result'
import { Repo } from '@/utils/github/use-github'
import { LoopsRepository } from '../repo/LoopsRepo'
import { Loop } from '../types'
import {nanoid} from 'nanoid'

export default async function CreateNewLoopService(repo: Repo): Promise<Result<Loop, string>> {
const newLoop : Loop = {
    id: `loop-${nanoid(10)}`,
    name: repo.name,
    description: repo.description || "",
    repoID: repo.id,
    owner: repo.owner,
    ownerID: repo.owner,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    updates: []
}
 const response = await LoopsRepository.createNewLoop(newLoop)
 if (!response.ok){
    return err(response.error)
 }


return ok(response.data)
  
}
