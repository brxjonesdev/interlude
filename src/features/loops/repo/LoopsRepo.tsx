"use client"
import { err, Result, ok } from '@/shared/types/result'
import { Loop } from '../types'
import { createClient } from '@/utils/supabase/client'

interface LoopsRepository {
  fetchLoops: () => Promise<Result<Loop[], string>>;
  createNewLoop: (loop: Loop) => Promise<Result<Loop, string>>;
}

const supabase = createClient()

export const LoopsRepository: LoopsRepository = {
  async fetchLoops(): Promise<Result<Loop[], string>> {
    const { data, error } = await supabase
      .from('Loops')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return err(error.message);
    }
    if (data) {
      return ok(data);
    }
    return err("Unknown error occurred");
  },
  async createNewLoop(loop: Loop): Promise<Result<Loop, string>> {
    const { data, error } = await supabase
      .from('Loops')
      .insert([
        {
          id: loop.id,
          name: loop.name,
          description: loop.description,
          owner: loop.owner,
          ownerID: loop.ownerID,
          repoID: loop.repoID,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return err(error.message);
    }
    if (data && data.length > 0) {
      return {
        ok: true,
        data: data[0],
      };
    }
    return err("Unknown error occurred");
  },
}
