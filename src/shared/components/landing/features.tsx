import { User } from "lucide-react";
import { Badge } from "@/shared/components/shadcn/badge";

export default function Features() {
  return (
    <div className="w-full pt-20 lg:pt-40 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Features</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Effortless changelogs, powered by GitHub.
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Interlude turns your GitHub activity into a sleek, public-facing changelog—so your users stay updated without the manual work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">GitHub-Powered</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Automatically sync commits, releases, and more—directly from your repo to your changelog.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Custom Posts</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Add manual updates alongside automated ones to share context, milestones, or product insights.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Public Blip Pages</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Each repo gets its own public-facing changelog page—clean, branded, and always up to date.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Simple Setup</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Just sign in with GitHub, pick a repo, and copy your webhook URL. No config files, no code changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
