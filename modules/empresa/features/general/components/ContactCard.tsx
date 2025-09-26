import { Card, CardHeader, CardContent } from "@/shared/components/ui/card"
import { getCompanyDataType } from "@/modules/empresa/actions/general_actions";

export const ContactCard = ({ companyData }: { companyData: getCompanyDataType }) => {
    return (
      <Card>
        <CardHeader>
        <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-400 border border-transparent dark:border-green-700 rounded-lg flex items-center justify-center">
              <span className="text-green-600 dark:text-green-100">📞</span>
            </div>
            <div>
              <label className="text-sm font-semibold dark:text-blue-300">Teléfono</label>
              <p className="font-medium text-foreground">{companyData.contact_phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 border border-transparent dark:border-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-100">✉️</span>
            </div>
            <div>
              <label className="text-sm font-semibold dark:text-blue-300">Email</label>
              <p className="font-medium ">{companyData.contact_email}</p>
            </div>
          </div>
        </div>
        </CardContent>

              </Card>
    );
  };
  