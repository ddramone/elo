"use client"

import { cn } from "@/utils/tailwind/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Circle } from "../../../server/types"
import HasAccess from "./has-access"

type Props = { circle: Circle }
export default function Navigation({ circle }: Props) {
  const currentPathname = usePathname()
  const circleRoot = `/${circle.slug}`

  const routes = [
    {
      pathname: circleRoot,
      label: "ranking",
    },
    {
      pathname: `${circleRoot}/history`,
      label: "history",
    },
  ]

  return (
    <div className="fixed top-0 z-auto flex w-full justify-between gap-4 p-4 py-4 font-medium text-gray-400">
      <div className="flex gap-4">
        <Link href={circleRoot} className="flex items-center gap-2">
          {/* <Logo className="w-8 text-accent" />
           */}
          <h1>shmelo</h1>
          <div className="h-4 w-0.5 bg-gray-400/20 dark:bg-gray-200/30" />
          <h1>{circle.name.toLowerCase()}</h1>
        </Link>

        <nav className="flex gap-2">
          {routes.map(({ pathname, label }) => (
            <Link
              href={pathname}
              key={pathname}
              className={cn(currentPathname === pathname && "text-accent")}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <HasAccess noAuthCallback={<Link href="/auth">login</Link>}>logged in</HasAccess>
      </div>
    </div>
  )
}
