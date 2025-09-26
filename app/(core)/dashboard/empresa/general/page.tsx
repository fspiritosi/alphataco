import GeneralEmpresa from "@/modules/empresa/features/general/general_feat";


export default function EmpresaGeneralPage() {
 
   return (
     <div className="min-h-screen  p-6">
       <div className="w-full mx-auto">
         <h1 className="text-2xl font-bold  mb-6">Datos de la Empresa</h1>
         <GeneralEmpresa />
       </div>
     </div>
   )
}