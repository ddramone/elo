import { getCircleBySlug, hasCurrentUserAccessToCircle } from "@/server/queries"
import { AccessProvider } from "./_context/access-context"
import Navigation from "./_components/navigation"
import { Suspense } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { circle: string }
}) {
  const circle = await getCircleBySlug(params.circle)
  if (!circle) return null

  const hasAccess = await hasCurrentUserAccessToCircle(circle.id)

  return (
    <AccessProvider circle={circle} hasAccess={hasAccess}>
      <TooltipProvider>
        <Navigation circle={circle} />
        <div className="container mx-auto flex h-full max-w-3xl flex-col">
          <div className="mx-auto mt-5 flex w-full items-center justify-center"></div>

          <div className="flex-1">
            <Suspense
              fallback={
                <div className="flex h-3/4 w-full flex-col justify-center text-center font-mono text-neutral-300">
                  loading...
                </div>
              }
            >
              {children}
            </Suspense>
          </div>
          <div className="max-h-28 flex-1"></div>
        </div>
      </TooltipProvider>
    </AccessProvider>
  )
}
