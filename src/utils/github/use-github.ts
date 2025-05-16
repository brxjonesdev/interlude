import useAuth from '@/shared/hooks/use-auth'
import { useEffect, useState } from 'react'
export type Repo ={
    id: number
    name: string
    fullName: string
    owner: string
    private: boolean
    url: string
    description: string | null
}

export default function useGithub() {
  const { token, user } = useAuth()

  const [eligibleRepos, setEligibleRepos] = useState<Repo[]>([])
  const [status, setStatus] = useState({
    loading: true,
    error: null as string | null,
  })

  useEffect(() => {
    if (!token || !user?.username) return // wait until both are ready

    const fetchEligibleRepos = async () => {
      setStatus({ loading: true, error: null })

      try {
        const res = await fetch(`https://api.github.com/users/${user.username}/repos`, {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${token}`,
          },
          cache: 'no-store',
        })

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`)
        }

        const repos = await res.json()
        console.log("Fetched repos:", repos)
        // filter out repos data 
        const filteredRepos = repos.map((repo): Repo => ({
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          owner: repo.owner.login,
          private: repo.private,
          url: repo.html_url,
          description: repo.description,
        }))

        setEligibleRepos(filteredRepos)
        setStatus({ loading: false, error: null })
      } catch (err) {
        console.error("Error fetching repos:", err)
        setStatus({ loading: false, error: "Error fetching repositories" })
      }
    }

    fetchEligibleRepos()
  }, [token, user])

  return {
    eligibleRepos,
    status,
  }
}
