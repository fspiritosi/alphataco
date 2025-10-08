// Acciones para el submódulo de información general de la empresa
// Aquí irían las funciones para obtener y actualizar datos generales de la empresa

import { createClientServer } from "@/lib/supabase/server";

export const getCompanyData = async () => {
  const supabase = await createClientServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  const { data, error } = await supabase
    .from("company")
    .select("*")
    // .eq("id", user.)
    .single();
  if (error) throw error;
  return data;
};
export type getCompanyDataType = Awaited<ReturnType<typeof getCompanyData>>;
