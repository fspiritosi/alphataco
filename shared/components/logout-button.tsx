"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/shared/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return <Button variant={'ghost'} size={'sm'} onClick={logout}><LogOut className="text-red-400" />Cerrar session</Button>;
}
