import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";

export const createNewCompany = async (body: Tables<'company'>) => {

    const supabase = await createClient();
    try {
        const { data, error } = await supabase.from('company').insert({
            ...body
        });
        if (error) throw error;
        console.log(data, "company")
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

