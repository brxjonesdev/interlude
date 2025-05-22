"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/shadcn/dialog"
import useGithub from '@/utils/github/use-github';
import { Button } from '@/shared/components/shadcn/button';
import { Separator } from '@/shared/components/shadcn/separator';
import useLoops from '../hooks/useLoops';
import useAuth from '@/shared/hooks/use-auth';

type CreationModalProps = {
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreationModal({
    isOpen,
    onOpenChange,
}: CreationModalProps) {
    const {eligibleRepos, status} = useGithub()
    const { createNewLoop } = useLoops()
    const { user } = useAuth()

    if (status.loading) {
        return (
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="font-manrope">
                    <DialogHeader className="text-left">
                        <DialogTitle className="text-2xl tracking-wide">
                            Loading...
                        </DialogTitle>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }

    if (status.error) {
        return (
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="font-manrope">
                    <DialogHeader className="text-left">
                        <DialogTitle className="text-2xl tracking-wide">
                            Error
                        </DialogTitle>
                        <DialogDescription className="font-work-sans">
                            {status.error}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }
  if (!user) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="font-manrope">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl tracking-wide">Create a new loop</DialogTitle>
          <DialogDescription className="font-work-sans">
            Connect your GitHub repo to Loop and start sharing what you&apos;re building with users now, and the ones
            you haven&apos;t met yet.
          </DialogDescription>
        </DialogHeader>
        <section className="max-h-[300px] overflow-y-auto pr-1 space-y-3">
          {eligibleRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex  p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:border-slate-300 flex-col space-y-2 sm:space-y-0"
            >
              <div className="flex items-start space-x-3">
                
                <div className="flex-1">
                  <h3 className="text-md font-semibold text-slate-800">{repo.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {repo.description || "No description available"}
                  </p>
                </div>
              </div>
              <Separator className='my-3'/>
              <Button size={"sm"} 
              className='hover:bg-black/80 border border-slate-200 hover:text-cyan-200 font-mono' 
              onClick={() => {
                createNewLoop(repo)
                onOpenChange(false)
              }}>
                Select {repo.name}
              </Button>
          
            </div>
          ))}
        </section>
      </DialogContent>
    </Dialog>


  )
}
