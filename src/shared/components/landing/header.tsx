import Link from "next/link"
import { Button } from "@/shared/components/shadcn/button"
import AuthButton from "../auth/auth-button"

export default function Header() {
  return (
    <header className="w-full border-b bg-background container">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Loop</span>
        </Link>
        <nav className="flex items-baseline gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">Features</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">Pricing</Link>
          </Button>
          <AuthButton/>
        </nav>
      </div>
    </header>
  )
}
