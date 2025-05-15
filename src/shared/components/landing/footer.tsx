import { Github} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background w-full px-5">
      <div className="container mx-auto py-12 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-foreground">Interlude</span>
          <p className="max-w-xs">
            Build in public. Share progress effortlessly with GitHub-powered changelogs.
          </p>
        
        </div>

        <div className="">
            <div>
                <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <Github className="h-4 w-4" />
                    <span className="text-sm">github.com/blusuede/interlude</span>
                </Link>
            </div>
        
        </div>
      </div>

      <div className="text-xs text-center text-muted-foreground py-6 border-t border-border">
         Built by blusuede.
      </div>
    </footer>
  );
}
