// Acciones para el submódulo de usuarios de la empresa
// Aquí irían las funciones para listar, crear, actualizar y eliminar usuarios

import { createClientServer } from "@/lib/supabase/server";

export const getPermissions = async () => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('permissions').select('*');
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export type getPermissionsType = Awaited<ReturnType<typeof getPermissions>>;