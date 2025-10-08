import { ChevronsUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import Image from "next/image"
import { getTeams } from "@/shared/actions/auth-actions"
import { TeamSwitcherError } from "./fallbacks/team-switcher-error"
import { TeamSwitcherEmpty } from "./fallbacks/team-switcher-empty"


export async function TeamSwitcher() {
  const { profile, error: teamsError, user } = await getTeams();
  const activeTeam = profile?.find((team) => team.company?.id === user?.company_id) || profile?.[0]

  if (teamsError) return <TeamSwitcherError />
  if (profile?.length === 0 || !activeTeam) return <TeamSwitcherEmpty />

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Image src={activeTeam.company?.logo || ""} alt={activeTeam.company?.name || ""} width={24} height={24} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.company?.name}</span>

              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
