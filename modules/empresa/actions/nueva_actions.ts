"use server";

import { createClientServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import {
  companyFormSchema,
  type CompanyFormData,
} from "../features/nueva/schemas/companySchema";

export async function createCompanyAction(
  formData: CompanyFormData,
  logoUrl?: string
) {
  try {
    // Validar los datos con Zod (sin el logo que ahora se maneja por separado)
    const validatedData = companyFormSchema.parse(formData);
    const { logo: _, ...dataWithoutLogo } = validatedData;

    const supabase = await createClientServer();

    // Preparar los datos para insertar
    const companyData = {
      name: dataWithoutLogo.name,
      description: dataWithoutLogo.description,
      website: dataWithoutLogo.website,
      email: dataWithoutLogo.email,
      phone: dataWithoutLogo.phone,
      address: dataWithoutLogo.address,
      country: dataWithoutLogo.country,
      cuit: dataWithoutLogo.cuit,
      province_id: dataWithoutLogo.province_id,
      city_id: dataWithoutLogo.city_id,
      is_active: true,
      logo: logoUrl || null, // Usar la URL del logo subida
    };

    // Insertar la empresa
    console.log("Insertando empresa con datos:", companyData);
    const { data: company, error: insertError } = await supabase
      .from("company")
      .insert(companyData);

    if (insertError) {
      console.error("Error al crear empresa:", insertError);
      return { success: false, error: "Error al crear la empresa" };
    }

    // Revalidar la caché
    revalidatePath("/dashboard");

    return { success: true, data: company };
  } catch (error) {
    console.error("Error en createCompanyAction:", error);

    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return { success: false, error: "Error desconocido al crear la empresa" };
  }
}

export async function getProvincesAction() {
  try {
    const supabase = await createClientServer();

    const { data, error } = await supabase
      .from("provinces")
      .select("id, name")
      .order("name", { ascending: true });

    if (error) {
      console.error("Error al obtener provincias:", error);
      return { provinces: [], error: error.message };
    }

    return { provinces: data || [], error: null };
  } catch (error) {
    console.error("Error en getProvincesAction:", error);
    return { provinces: [], error: "Error al obtener provincias" };
  }
}

export type GetProvincesActionType = Awaited<
  ReturnType<typeof getProvincesAction>
>;

export async function getCitiesByProvinceAction(provinceId: string) {
  try {
    const supabase = await createClientServer();

    const { data, error } = await supabase
      .from("cities")
      .select("id, name")
      .eq("province_id", provinceId)
      .order("name", { ascending: true });

    if (error) {
      console.error("Error al obtener ciudades:", error);
      return { cities: [], error: error.message };
    }

    return { cities: data || [], error: null };
  } catch (error) {
    console.error("Error en getCitiesByProvinceAction:", error);
    return { cities: [], error: "Error al obtener ciudades" };
  }
}

export type GetCitiesByProvinceActionType = Awaited<
  ReturnType<typeof getCitiesByProvinceAction>
>;
