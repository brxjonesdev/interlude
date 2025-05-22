import { Bell } from 'lucide-react'
import React from 'react'

export default function NotificationsWidget() {
  return (
    <div className="relative lg:hidden">
                <Bell className="h-4 w-4 text-slate-600" />
                <span className="absolute -top-1 -right-1 bg-slate-800 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
                  5
                </span>
              </div>
  )
}
