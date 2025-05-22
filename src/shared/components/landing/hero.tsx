import Image from "next/image"
import AuthButton from "../auth/auth-button"

export default function Hero() {
  return (
    <div className="container">
      <div className="flex flex-col items-center text-center space-y-5">
        {/* Text Content */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
  Turn your GitHub activity into a beautiful public changelog.
</h1>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400 font-work-sans ">
  Keep your users in the know about your product with our automated, customizable Blip pages—no manual updates required.
</p>

          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <AuthButton defaultMessage={"Get Started"}/>
            
          </div>
        </div>

        {/* App Screenshot */}
        <div className="relative w-full   mt-8 px-10">
          <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl mx-auto max-h-[500px]">
            <Image
              src="/placeholder.svg?height=300&width=320"
              width={320}
              height={600}
              alt="App screenshot"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 h-[200px] w-[200px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-6 -top-6 h-[200px] w-[200px] rounded-full bg-primary/20 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
