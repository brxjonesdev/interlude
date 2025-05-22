"use client"
import useLoops from '@/features/loops/hooks/useLoops'
import React from 'react'

export default function Loops() {
  const { loops, error, loading } = useLoops()
  if (loading) {
    return (
      <section className='flex-1 bg-black/10 flex items-center justify-center rounded-xl'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-slate-500'>Loading...</p>
        </div>
      </section>
    )
  }
  return (
    <section className='flex-1 bg-black/10'>
        
    </section>
  )
}
