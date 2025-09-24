import { Card, CardHeader, CardContent } from "@/components/ui/card"

export const StatusCard = ({ companyData }: { companyData: any }) => {
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
              Activa
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium dark:text-blue-300">Última actualización</span>
            <span className="text-sm">Hace 2 días</span>
          </div>
        </div>
        </CardContent>
          </Card>
    );
  };