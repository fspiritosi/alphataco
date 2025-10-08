'use client'
import { getTeamsType } from "@/shared/actions/auth-actions"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from "@/shared/components/ui/dropdown-menu"
import { useSidebar } from "@/shared/components/ui/sidebar"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

function TeamSwitcherMenuContent({ teams }: { teams: getTeamsType['profile'] }) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  return (
    <DropdownMenuContent
      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      align="start"
      side={isMobile ? "bottom" : "right"}
      sideOffset={4}
    >
      <DropdownMenuLabel className="text-muted-foreground text-xs">
        Empresas
      </DropdownMenuLabel>
      {teams?.map((team, index) => (
        <DropdownMenuItem
          key={team.company?.name}
          onClick={() => console.log(team)}
          className="gap-2 p-2"
        >
          <div className="flex size-6 items-center justify-center rounded-md border">
            <Image src={team.company?.logo || ""} alt={team.company?.name || ""} width={24} height={24} />
          </div>
          {team.company?.name}
          <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="gap-2 p-2" onClick={() => router.push("/dashboard/empresa/nueva")}>

        <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
          <Plus className="size-4" />
        </div>
        <div className="text-muted-foreground font-medium">Nueva Empresa</div>

      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default TeamSwitcherMenuContent
