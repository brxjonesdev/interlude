import { Button } from '@/shared/components/shadcn/button'
import { PlusCircle } from 'lucide-react'
import React from 'react'
import CreationModal from './loop-creation-modal'


export default function CreateLoop() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (<>
  
     <Button 
      variant="default" 
      size="sm" 
      className="h-7 bg-[#151515] text-xs px-2 py-0"
      onClick={() => setIsOpen(true)}>
      <PlusCircle className="h-3 w-3 mr-1" />
      Create Loop
    </Button>
    <CreationModal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    />

  </>)
}
