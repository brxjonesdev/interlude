import React from 'react'
import { createClient } from '@/utils/supabase/server'
import { RepositoryCard } from './repo-card'


export default async function ReposList() {
  const supabase = await createClient()

  const { data: sessionData, error } = await supabase.auth.getSession()
  if (error) {
    console.error("Error fetching session:", error)
    return <div className="p-2 text-red-500 text-sm">Error fetching session</div>
  }

  if (!sessionData.session) {
    return <div className="p-2 text-amber-500 text-sm">No session found</div>
  }

  const accessToken = sessionData.session.provider_token
  const username = sessionData.session.user.user_metadata.user_name

  console.log("Access Token:", accessToken)
  console.log("Username:", username)

  let repos: any[] = []

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${accessToken}`
      },
      // Force server-fetching in a server component
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`)
    }

    repos = await res.json()
    console.log("Repositories:", repos)
  } catch (err) {
    console.error("Error fetching repos:", err)
    return <div className="p-2 text-red-500 text-sm">Error fetching repositories</div>
  }

  return (
    <section>
      <h3 className="font-semibold mb-4">Your Loops:</h3>
      <div className="grid gap-4">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </section>
  )
}
