// Acciones para el submódulo de información general de la empresa
// Aquí irían las funciones para obtener y actualizar datos generales de la empresa

import { createClientServer } from "@/lib/supabase/server";

export const getCompanyData = async () => {
  const supabase = await createClientServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("company")
    .select("*,cities(name)")
    .eq("id", user?.user_metadata.current_company)
    .single();

  //  const{data:{user},error}= await supabase.auth.admin.createUser({
  //     email: data?.email,
  //     password: "123456",
  //     user_metadata: {
  //       current_company: data?.id,
  //     },
  //   })

  if (error) throw error;
  // const { data: companyUser, error: companyUserError } = await supabase
  //   .from("company_users")
  //   .insert({
  //     company_id: data?.id,
  //     user_id: user?.id,
  //     role: "admin",
  //   })
  //   .single();

  // if (companyUserError) throw companyUserError;
  return data;
};
export type getCompanyDataType = Awaited<ReturnType<typeof getCompanyData>>;

export const getProvinceById = async (provinceId: string) => {
  const supabase = await createClientServer();
  const { data, error } = await supabase
    .from("provinces")
    .select("name")
    .eq("id", provinceId)
    .single();

  if (error) {
    console.error("Error al obtener provincia:", error);
    return null;
  }
  return data;
};
export type getProvinceByIdType = Awaited<ReturnType<typeof getProvinceById>>;
