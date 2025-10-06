"use server";

import { createClientServer } from "@/lib/supabase/server";

export const getCurrentUser = async () => {
  const supabase = await createClientServer();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  return data?.claims;
};

export type getCurrentUserType = Awaited<ReturnType<typeof getCurrentUser>>;


export const getUserData = async (userEmail: string) => {
  const supabase = await createClientServer();

  const { data } = await supabase.from("profile").select("*").eq("email", userEmail).single();

  return data;
}

export type getUserDataType = Awaited<ReturnType<typeof getUserData>>;

export const getTeams = async (userId: string) => {
  const supabase = await createClientServer();

  const { data: profile } = await supabase.from("share_company_users").select("company(company_name, company_logo)").eq("profile_id", userId);
  //const { data } = await supabase.from("share_company_users").select('company_id(company_name, company_logo)').eq("profile_id", userId);

  return profile;
}

export type getTeamsType = Awaited<ReturnType<typeof getTeams>>;
  