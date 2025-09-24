"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

import { usePathname } from "next/navigation"

  export const BreadcrumbFeat = () => {
    const pathname = usePathname()
    const path = pathname.split("/")
    const module = path[2]
    const section = path[3]
    console.log(path)
    console.log(module)
    console.log(section)

    const baseUrl = '/dashboard'

    return(
        <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={`${baseUrl}/${module}`}>
                   {module}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                {
                    section && (
                        <BreadcrumbItem>
                            <BreadcrumbPage>{section}</BreadcrumbPage>
                        </BreadcrumbItem>
                    )
                }
                </BreadcrumbList>
            </Breadcrumb>
    )
}