import Loops from '@/shared/components/dashboard/loops-list'
import UserCard from '@/shared/components/dashboard/user-card'
import React from 'react'

export default function Dashboard() {
  return (
     <main className='font-manrope bg-[#fcfbfa] min-h-screen p-4 flex flex-col gap-2 md:grid md:grid-cols-[.4fr_1fr] lg:gap-4'>
      <section>
      <UserCard/>
      </section>
      <Loops
        loops={[]}
        error={null}
        loading={false}
        />
    </main>
  )
}
