import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { Users } from "lucide-react";
import { PermissionsTable } from "@/modules/empresa/features/permisos/permisos_feat";
import HeaderModule from "@/shared/components/header-module";

export default function Page() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto">
      <div className="mb-8 flex items-start justify-between">
        <HeaderModule title="Gestión de Permisos" description="Administra permisos y asígnalos a usuarios de tu empresa" />
          <Link href="/dashboard/empresa/usuarios">
            <Button variant="outline" className="border-border bg-transparent">
              <Users className="mr-2 h-4 w-4" />
              Ver Usuarios
            </Button>
          </Link>
        </div>
        <PermissionsTable />
      </div>
    </main>
  )
}

  