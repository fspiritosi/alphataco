import { DangerZoneCard } from "@/modules/empresa/features/general/components/DangerZoneCard";
import { GridCards } from "@/modules/empresa/features/general/components/GridCards";


export default function Page() {

  const companyData = {
    razonSocial: "Codecontrol SAS",
    cuit: "30718578481",
    direccion: "Pilhue 402",
    pais: "Argentina",
    ciudad: "Rincón de Los Sauces",
    industria: "Software",
    telefono: "+542995810476",
    email: "info@codecontrol.com.ar"
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="w-full mx-auto">
        <h1 className="text-2xl font-bold  mb-6">Datos de la Empresa</h1>
        <GridCards companyData={companyData} />
        <DangerZoneCard />
      </div>
    </div>
  )
}
