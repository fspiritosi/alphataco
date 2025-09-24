import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const BasicInfoCard = ({ companyData }: { companyData: any }) => {
    return (
      <Card  >
        <CardHeader>

        <h3 className="text-lg font-semibold mb-4 text-foreground">Información Básica</h3>
        </CardHeader>
        <CardContent>
        
          <div className="flex items-center space-x-3 mb-4">
            <label className="text-sm font-semibold text-foreground w-24 dark:text-blue-300">Razón Social</label>
            <p className="font-medium text-foreground">{companyData.razonSocial}</p>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <label className="text-sm font-semibold text-foreground w-24 dark:text-blue-300">CUIT</label>
            <p className="font-medium text-foreground">{companyData.cuit}</p>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <label className="text-sm font-semibold text-foreground w-24 dark:text-blue-300">Industria</label>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
              {companyData.industria}
            </span>
          </div>

        </CardContent>
      </Card>
    );
  };