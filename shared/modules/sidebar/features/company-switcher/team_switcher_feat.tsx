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
import TeamSwitcherMenuContent from "./components/_team-switcher-menu-content"


export async function TeamSwitcher() {
  const { profile, error: teamsError, user } = await getTeams();
  const activeTeam = profile?.find((team) => team.company?.id === user?.user_metadata?.current_company) || profile?.[0]

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
              <div className="relative size-12 overflow-hidden rounded-lg">
                {activeTeam.company?.logo ? (
                  <Image
                    src={activeTeam.company.logo}
                    alt={activeTeam.company.name || ""}
                    width={48}
                    height={48}
                    className="size-full object-contain p-2"
                  />
                ) : (
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-full items-center justify-center rounded-lg text-xl font-semibold">
                    {activeTeam.company?.name?.charAt(0).toUpperCase() || 'E'}
                  </div>
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.company?.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <TeamSwitcherMenuContent teams={profile} />

        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
