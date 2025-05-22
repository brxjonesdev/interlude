import React from 'react'
import {useState, useEffect} from 'react'
import { createNewLoop, Loop } from '../types'

export default function useLoops() {
  const [loops, setLoops] = useState<any[]>([])
  const [status, setStatus] = useState({
    loading: true,
    error: null
  })
  
  // fetch new loops added recently

  // call the service to create a new loop
  function addLoop(loop: Loop) {
   console.log('Adding loop:', loop)
   
  }

  // call the service to update a loop

  // call the service to delete a loop

  // call the service to get a loop by id



  return {
    addLoop,
    // updateLoop,
    // deleteLoop,
    // getLoopById
    loops,
    error: status.error,
    loading: status.loading
  }


}
