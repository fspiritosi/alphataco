import { Card, CardHeader, CardContent } from "@/shared/components/ui/card"
import { getCompanyDataType } from "@/modules/empresa/actions/general_actions";

export const StatusCard = ({ companyData }: { companyData: getCompanyDataType }) => {
    return (
      <Card >
        <CardHeader>
        <h3 className="text-lg font-semibold mb-4">Estado</h3>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium dark:text-blue-300">Estado de la empresa</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {companyData.is_active ? "Activa" : "Inactiva"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium dark:text-blue-300">Período Fiscal Activo</span>
            <span className="text-sm">01/01/2025 - 31/12/2025</span>
          </div>
        </div>
        </CardContent>
          </Card>
    );
  };