'use server'
import { createClientServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// Acciones para el submódulo de configuración de empleados
// Aquí irían las funciones para listar, crear, actualizar y eliminar tipos de contrato

export const get_contract_types = async () => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from("emp_contract_type").select("*");
        if (error) throw error;
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const create_contract_type = async (contract_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_contract_type').insert([contract_type]);
        if (error) throw error;
        revalidatePath('/dashboard/empleados/configuracion')
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const update_contract_type = async (contract_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_contract_type').update(contract_type).eq('id', contract_type.id);
        if (error) throw error;
        revalidatePath('/dashboard/empleados/configuracion')
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const delete_contract_type = async (contract_type_id: string) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_contract_type').delete().eq('id', contract_type_id);
        if (error) throw error;
        revalidatePath('/dashboard/empleados/configuracion')
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export type contract_type_type = Awaited<ReturnType<typeof get_contract_types>>;
export type create_contract_type_type = Awaited<ReturnType<typeof create_contract_type>>;
export type update_contract_type_type = Awaited<ReturnType<typeof update_contract_type>>;
export type delete_contract_type_type = Awaited<ReturnType<typeof delete_contract_type>>;


// Aquí irían las funciones para listar, crear, actualizar y eliminar tipos de diagramas


export const get_diagram_types = async () => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_diagrams_types').select('*');
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const create_diagram_type = async (diagram_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_diagrams_types').insert([diagram_type]);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const update_diagram_type = async (diagram_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_diagrams_types').update(diagram_type).eq('id', diagram_type.id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const delete_diagram_type = async (diagram_type_id: string) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_diagrams_types').delete().eq('id', diagram_type_id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export type diagram_type_type = Awaited<ReturnType<typeof get_diagram_types>>;
export type create_diagram_type_type = Awaited<ReturnType<typeof create_diagram_type>>;
export type update_diagram_type_type = Awaited<ReturnType<typeof update_diagram_type>>;
export type delete_diagram_type_type = Awaited<ReturnType<typeof delete_diagram_type>>;


// Aquí irían las funciones para listar, crear, actualizar y eliminar novedades de empleados

export const get_novelty_types = async () => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_novelty_type').select('*');
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const create_novelty_type = async (novelty_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_novelty_type').insert([novelty_type]);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const update_novelty_type = async (novelty_type: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_novelty_type').update(novelty_type).eq('id', novelty_type.id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const delete_novelty_type = async (novelty_type_id: string) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_novelty_type').delete().eq('id', novelty_type_id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export type novelty_type_type = Awaited<ReturnType<typeof get_novelty_types>>;
export type create_novelty_type_type = Awaited<ReturnType<typeof create_novelty_type>>;
export type update_novelty_type_type = Awaited<ReturnType<typeof update_novelty_type>>;
export type delete_novelty_type_type = Awaited<ReturnType<typeof delete_novelty_type>>;


// Aqui irían las funciones para listar, crear, actualizar y eliminar sectores de empleados

export const get_employees_sectors = async () => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_sector_company').select('*');
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const create_employees_sector = async (employees_sector: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_sector_company').insert([employees_sector]);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const update_employees_sector = async (employees_sector: any) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_sector_company').update(employees_sector).eq('id', employees_sector.id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const delete_employees_sector = async (employees_sector_id: string) => {
    const supabase = await createClientServer();
    try {
        const { data, error } = await supabase.from('emp_sector_company').delete().eq('id', employees_sector_id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export type employees_sector_type = Awaited<ReturnType<typeof get_employees_sectors>>;
export type create_employees_sector_type = Awaited<ReturnType<typeof create_employees_sector>>;
export type update_employees_sector_type = Awaited<ReturnType<typeof update_employees_sector>>;
export type delete_employees_sector_type = Awaited<ReturnType<typeof delete_employees_sector>>;
