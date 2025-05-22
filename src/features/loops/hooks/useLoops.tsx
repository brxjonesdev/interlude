"use client"
import {useEffect, useState,} from 'react'
import { Loop } from '../types'
import { Repo } from '@/utils/github/use-github'
import CreateNewLoopService from '../services/createNewLoop'
import { useRouter } from 'next/navigation'
import fetchLoopsService from '../services/fetchLoops'

export default function useLoops() {
  const router = useRouter()
  const [loops, setLoops] = useState<Loop[]>([])
  const [status, setStatus] = useState<{
    loading: boolean,
    error: string | null
  }>({
    loading: true,
    error: null
  })
  
  // fetch new loops added recently
  useEffect(()=> {
    async function fetchLoops() {
      try {
        const response = await fetchLoopsService()
        if (response.ok) {
          setLoops(response.data)
          setStatus({
            loading: false,
            error: null
          })
        } else {
          setStatus({
            loading: false,
            error: response.error
          })
        }
      }
      catch (error) {
        setStatus({
          loading: false,
          error: 'Error fetching loops' + error
        })
      }
    }
    fetchLoops()
  }, [])

  // call the service to create a new loop
  async function createNewLoop(repo: Repo) {
    try{
      const result = await CreateNewLoopService(repo)
      if (result.ok) {
        setStatus({
          loading: false,
          error: null
        })
        router.push(`${window.location.origin}/loops/${result.data.id}`)
      } else {
        setStatus({
          loading: false,
          error: result.error
        })
      }
    }
    catch (error) {
      setStatus({
        loading: false,
        error: 'Error creating loop' + error
      })
    }

  }

  // call the service to update a loop

  // call the service to delete a loop

  // call the service to get a loop by id



  return {
    createNewLoop,
    // updateLoop,
    // deleteLoop,
    // getLoopById
    loops,
    error: status.error,
    loading: status.loading
  }


}
