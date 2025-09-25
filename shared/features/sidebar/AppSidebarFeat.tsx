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


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = await getCurrentUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        {/* <NavProjects /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
