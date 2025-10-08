import { createClientServer } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const supabase = await createClientServer();

  // You can also use getUser() which will be slower.
  const { data, error } = await supabase.auth.getClaims();

  return { user: data?.claims, error };
};
export type getCurrentUserType = Awaited<ReturnType<typeof getCurrentUser>>;

export const getUserData = async () => {
  const supabase = await createClientServer();

  const { data, error } = await supabase.auth.getClaims();

  return { user: data?.claims, error };
};
export type getUserDataType = Awaited<ReturnType<typeof getUserData>>;

export const getTeams = async () => {
  const supabase = await createClientServer();
  const { user } = await getUserData();

  const { data: profile, error } = await supabase
    .from("company_users")
    .select("company(name, logo,id)")
    .eq("user_id", user!.sub);

  if (!profile || profile?.length === 0) {
    const headersList = await headers();
    const pathname =
      headersList.get("next-url") || headersList.get("referer") || "";
    const fullUrl = `${pathname}`;
    if (!fullUrl || !fullUrl?.includes("/dashboard/empresa/nueva")) {
      return redirect("/dashboard/empresa/nueva");
    }
  }

  return { profile, error, user };
};
export type getTeamsType = Awaited<ReturnType<typeof getTeams>>;

export const checkUserCompany = async () => {
  const supabase = await createClientServer();
  const { user, error: userError } = await getUserData();
  if (userError) {
    return { count: 0, error: userError };
  }

  const { count, error } = await supabase
    .from("company_users")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user!.user?.sub);

  return { count, error };
};
export type checkUserCompanyType = Awaited<ReturnType<typeof checkUserCompany>>;
