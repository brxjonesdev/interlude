"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Star, GitFork, AlertCircle, Eye, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/shadcn/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/shadcn/avatar"
import { Badge } from "@/shared/components/shadcn/badge"
import { Button } from "@/shared/components/shadcn/button"

interface RepositoryProps {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  watchers_count: number
  topics: string[]
  visibility: string
  created_at: string
  updated_at: string
  pushed_at: string
  language: string | null
}

export function RepositoryCard({ repository }: { repository: RepositoryProps }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="h-full transition-all duration-200 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={repository.owner.avatar_url || "/placeholder.svg"} alt={repository.owner.login} />
              <AvatarFallback>{repository.owner.login.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base font-medium">{repository.name}</CardTitle>
              <CardDescription className="text-xs">{repository.owner.login}</CardDescription>
            </div>
          </div>
          <Badge variant={repository.visibility === "public" ? "default" : "secondary"}>{repository.visibility}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {repository.description || "No description provided"}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {repository.topics &&
            repository.topics.map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {repository.language && (
            <div className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>{repository.language}</span>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{repository.stargazers_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{repository.forks_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>{repository.open_issues_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{repository.watchers_count}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2">
        <div className="text-xs text-muted-foreground">
          Updated {formatDistanceToNow(new Date(repository.updated_at))} ago
        </div>

        <div className={`w-full transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Button asChild variant="outline" className="w-full mt-2">
            <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View Repository
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
