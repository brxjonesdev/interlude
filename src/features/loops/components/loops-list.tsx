"use client"
import useLoops from '@/features/loops/hooks/useLoops'
import Link from 'next/link'

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

  if (error) {
    return (
      <section className='flex-1 bg-black/10 flex items-center justify-center rounded-xl'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-slate-500'>{error}</p>
        </div>
      </section>
    )
  }
  return (
    <section className='flex-1 bg-black/10 rounded-xl'>
      {loops.length === 0 ? (
        <div className='flex items-center justify-center h-full'>
          <p className='text-slate-500'>No loops found</p>
        </div>
      ) : (
        <div className='flex flex-col gap-4 p-4'>
          {loops.map((loop) => (
            <Link
              key={loop.id}
              href={`/loops/${loop.id}`}
              className='bg-black/20 hover:bg-black/30 rounded-lg p-4 flex items-center gap-4'>
              <div className='flex flex-col'>
                <h2 className='text-lg font-semibold'>{loop.name}</h2>
                <p className='text-sm text-slate-500'>{loop.description}</p>
                </div>
              </Link>
          ))}
        </div>
      )}
        
    </section>
  )
}
