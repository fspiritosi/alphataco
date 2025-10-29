import { Card, CardContent, CardHeader } from '@/shared/components/ui/card'
import { get_contract_types } from '../../actions/config_actions'

async function Config_employees_wrapper() {
    const contract_types = await get_contract_types()

    console.log(contract_types)

  return (
    <Card>
      <CardHeader>
        <h4>Configuración de Empleados</h4>
      </CardHeader>
      <CardContent>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-2">div 1</Card>
          <Card className="p-2">div 2</Card>
          <Card className="p-2">div 3</Card>
          <Card className="p-2">div 4</Card>
        </div>
      
      </CardContent>
    </Card>
  )
}

export default Config_employees_wrapper