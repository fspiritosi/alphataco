"use client"

import { AlertCircle } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar"

interface NavUserErrorProps {
  error?: string
}

export function NavUserError({ error = "Error al cargar los datos del usuario" }: NavUserErrorProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground text-destructive"
          disabled
        >
          <AlertCircle className="h-8 w-8 rounded-lg" />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Error</span>
            <span className="truncate text-xs">{error}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}