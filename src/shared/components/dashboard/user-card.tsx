import { Card } from "@/shared/components/shadcn/card"
import { Button } from "@/shared/components/shadcn/button"
import { PlusCircle, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/shadcn/avatar"
import { Badge } from "@/shared/components/shadcn/badge"
import { createClient } from "@/utils/supabase/server"
import { Separator } from "../shadcn/separator"



export default async function UserCard() {
  let userData
  let error

  try {
    const supabase = await createClient()
    const response = await supabase.auth.getUser()
    userData = response.data.user
    error = response.error
  } catch (e) {
    console.error("Error with Supabase client:", e)
    error = e
  }

  if (error) {
    console.error("Error fetching user:", error)
    return <div className="p-2 text-red-500 text-sm">Error fetching user data</div>
  }

  if (!userData) {
    return <div className="p-2 text-amber-500 text-sm">No user found</div>
  }


  return (
    <Card className="w-full bg-white rounded-lg px-3 py-2 gap-2">
      <div className="flex items-center justify-between">
        {/* Left section: Avatar and name */}
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-slate-200">
            <AvatarImage
              src={userData.user_metadata?.avatar_url || "/placeholder.svg?height=32&width=32"}
              alt={userData.user_metadata?.name || "User"}
            />
            <AvatarFallback className="bg-slate-700 text-white text-xs">
              {userData.user_metadata?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-bold text-slate-800">{userData.user_metadata?.user_name || "User"}</h2>
            <p className="text-xs text-slate-500">Settings</p>
          </div>
        </div>
  

        {/* Right section: Actions */}
        <div className="flex items-center gap-4">
        <div className="relative">
            <Bell className="h-4 w-4 text-slate-600" />
            <span className="absolute -top-1 -right-1 bg-slate-800 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
              5
            </span>
          </div>
          <Button variant="default" size="sm" className="h-7 bg-[#151515] text-xs px-2 py-0">
            <PlusCircle className="h-3 w-3 mr-1" />
            Create Loop
          </Button>
        </div>
      </div>
      <Separator className="my-1" />
      <p className="text-xs text-slate-500 ml-auto pb-1">
        Last Update Received:{" "}
        <Badge className="bg-slate-100 text-slate-800 font-medium">
          {new Date(Date.now()).toLocaleString()}
        </Badge>
      </p>
    </Card>
  )
}
