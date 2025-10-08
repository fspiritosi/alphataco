import { NavMain } from "@/shared/modules/sidebar/components/nav-main"
import { NavUser } from "@/shared/modules/sidebar/components/nav-user"
import { TeamSwitcher } from "@/shared/modules/sidebar/features/company-switcher/team_switcher_feat"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/ui/sidebar"
import { getUserData } from "@/shared/actions/auth-actions"
import { Suspense } from "react"
import { NavUserSkeleton } from "./skeletons/nav-user-skeleton"
import { NavUserError } from "./skeletons/nav-user-error"
import { TeamSwitcherSkeleton } from "./features/company-switcher/fallbacks/team-switcher-skeleton"


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { error, user } = await getUserData();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Suspense fallback={<TeamSwitcherSkeleton />}>
          <TeamSwitcher />
        </Suspense>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <Suspense fallback={<NavUserSkeleton />}>
          {error ? <NavUserError /> : <NavUser user={user} />}
        </Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
