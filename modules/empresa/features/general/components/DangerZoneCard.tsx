import { Card, CardContent, CardHeader } from "@/shared/components/ui/card"

export const DangerZoneCard = () => {
    return (
      <Card>
        <CardHeader>
            <div className="flex items-center space-x-2 ">   

        <div className="w-8 h-8 bg-red-100 dark:bg-red-900 border border-transparent dark:border-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-red-600 dark:text-red-100">⚠️</span>
          </div>
        <h3 className="text-lg font-semibold text-foreground">Zona Peligrosa</h3>
            </div>
        </CardHeader>
        <CardContent>
        <div className="flex items-start space-x-3">
          
          <div className="flex-1">
            <p className="text-red-700 dark:text-red-200">
              Al eliminar esta empresa se eliminarán todos los registros asociados a ella.
              Esta acción no se puede deshacer.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 dark:focus:ring-offset-gray-900">
              Eliminar Empresa
            </button>
          </div>
        </div>
        </CardContent>
      </Card>
    );
  };