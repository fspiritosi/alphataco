import { NavMain } from "@/shared/features/sidebar/components/nav-main"
import { NavUser } from "@/shared/features/sidebar/components/nav-user"
import { TeamSwitcher } from "@/shared/features/sidebar/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/ui/sidebar"
import { getCurrentUser } from "@/shared/actions/user-actions"
import { getUserData } from "@/shared/actions/user-actions"
import { getTeams } from "@/shared/actions/user-actions"


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = await getCurrentUser();
  const userData = await getUserData(user?.email as string);
  console.log(user)
  console.log(userData)
  const teams = await getTeams(user?.sub as string);
  console.log(teams)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        {/* <NavProjects /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
