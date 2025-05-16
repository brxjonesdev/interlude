import Loops from '@/shared/components/dashboard/loops-list'
import ReposList from '@/shared/components/dashboard/repos'
import UserCard from '@/shared/components/dashboard/user-card'
import React from 'react'

export default function Dashboard() {
  return (
     <main className='font-manrope bg-[#fcfbfa] min-h-screen p-4 flex flex-col gap-4'>
      <UserCard/>
      <Loops
        loops={[]}
        error={null}
        loading={false}
        />
    </main>
  )
}
