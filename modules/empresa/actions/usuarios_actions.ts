// // Acciones para el submódulo de usuarios de la empresa
// // Aquí irían las funciones para listar, crear, actualizar y eliminar usuarios

// import { createClientServer } from "@/lib/supabase/server";

// export const getCompanyUsers = async (company_id: string) => {
//     const supabase = await createClientServer();
//     const { data, error } = await supabase.from('share_company_users').select('*, profile_id(fullname, avatar, role)').eq('company_id', company_id);
//     if (error) throw error;
//     return data;
// }

// export type getCompanyUsersType = Awaited<ReturnType<typeof getCompanyUsers>>;
