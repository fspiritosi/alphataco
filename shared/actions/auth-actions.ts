"use server";
import {
  createAdminClientServer,
  createClientServer,
} from "@/lib/supabase/server";

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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error } = await supabase
    .from("company_users")
    .select("company(name, logo,id)");

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

export const updateUserCurrentCompany = async (companyId: string) => {
  console.log(companyId, "companyIdcompanyId");
  const supabase = await createAdminClientServer();
  //TODO: agregar el ROL
  await supabase.auth.updateUser({
    data: { current_company: companyId },
  });
};
