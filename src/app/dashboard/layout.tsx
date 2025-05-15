import React from 'react'

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
   <main className='font-manrope bg-[#fcfbfa] min-h-screen'>
    {children}
   </main>
  )
}
