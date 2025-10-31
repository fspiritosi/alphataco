import { Card, CardContent, CardHeader } from '@/shared/components/ui/card'
import ContractTypeWrapper from './contract_types/ContractTypeWrapper'
import DiagramsTypeWrapper from './diagrams_types/DiagramsTypeWrapper'


 function Config_employees_wrapper() {


 return (
  <>
      <Card>
      <CardHeader>
        <h4>Configuración de Empleados</h4>
      </CardHeader>
      <CardContent>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8">

          <ContractTypeWrapper />
          <DiagramsTypeWrapper />
          {/* <ContractTypeWrapper />
          <ContractTypeWrapper />
          <ContractTypeWrapper /> */}


        </div>
      
      </CardContent>
    </Card>

  </>

  )
}

export default Config_employees_wrapper