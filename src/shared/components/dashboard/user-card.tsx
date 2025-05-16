"use client"

import { Card } from "@/shared/components/shadcn/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/shadcn/avatar"
import { Badge } from "@/shared/components/shadcn/badge"
import { Separator } from "../shadcn/separator"
import useAuth from "@/shared/hooks/use-auth"
import CreateLoop from "@/features/loops/components/create-loop"
import { Skeleton } from "../shadcn/skeleton"
import NotificationsWidget from "@/features/notifications/components/notification-count"

export default function UserCard() {
  const { user } = useAuth()
  const lastUpdate = new Date().toLocaleString()

  return (
    <Card className="w-full bg-white rounded-lg px-3 py-2 gap-2">
      <div className="flex items-center justify-between">
        {/* Left section: Avatar and name */}
        {user ? (<div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-slate-200">
            <AvatarImage
              src={user?.avatarUrl || "/placeholder.svg?height=32&width=32"}
              alt={user?.fullName || user?.username || "User"}
            />
            <AvatarFallback className="bg-slate-700 text-white text-xs">
              {user?.fullName?.charAt(0) || user?.username?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-bold text-slate-800">
              {user?.username || "User"}
            </h2>
            <p className="text-xs text-slate-500">Settings</p>
          </div>
        </div>) : <Skeleton className="w-[50%] h-[36px] rounded-full" />}

        {/* Right section: Actions */}
        <div className="flex items-center gap-4">
          <NotificationsWidget />
          <CreateLoop/>
        </div>
      </div>

      <Separator className="my-1" />

      <p className="text-xs text-slate-500 ml-auto pb-1">
        Last Update Received:{" "}
        <Badge className="bg-slate-100 text-slate-800 font-medium">
          {lastUpdate}
        </Badge>
      </p>
    </Card>
  )
}
