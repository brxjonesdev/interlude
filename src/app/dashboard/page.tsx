import ReposList from '@/shared/components/dashboard/repos'
import UserCard from '@/shared/components/dashboard/user-card'
import React from 'react'

export default function Dashboard() {
  return (
    <section className='flex flex-col gap-4 p-4'>
      <UserCard/>
      <ReposList/>
    </section>
  )
}
