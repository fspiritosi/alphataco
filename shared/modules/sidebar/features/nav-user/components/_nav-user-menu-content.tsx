'use client'
import { getUserDataType } from '@/shared/actions/auth-actions'
import { LogoutButton } from '@/shared/components/logout-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/shared/components/ui/dropdown-menu'
import { useSidebar } from '@/shared/components/ui/sidebar'
import { BadgeCheck, Bell, CreditCard } from 'lucide-react'
import React from 'react'

function NavUserMenuContent({ user }: { user: getUserDataType['user'] }) {
    const { isMobile } = useSidebar()
    return (
        <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
        >
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user?.avatar || ""} alt={user?.fullname || ""} />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user?.fullname}</span>
                        <span className="truncate text-xs">{user?.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem disabled>
                    <BadgeCheck />
                    Cuenta
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <CreditCard />
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Bell />
                    Notifications
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <LogoutButton />
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}

export default NavUserMenuContent
