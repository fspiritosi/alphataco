"use server";

import { createClientServer } from "@/lib/supabase/server";

export const getCurrentUser = async () => {
  const supabase = await createClientServer();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  return data?.claims;
};

export type getCurrentUserType = Awaited<ReturnType<typeof getCurrentUser>>;
