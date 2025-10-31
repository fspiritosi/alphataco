import { get_contract_types } from '@/modules/empleados/actions/config_actions'
import { ContractTypeTable } from './ContractTypeTable'
import { ButtonWrapper } from './ButtonWrapper'
import { Card, CardHeader } from '@/shared/components/ui/card'


function ContractTypeWrapper() {
     const contract_types =  get_contract_types()
  return (
     <Card className="p-2">
            <CardHeader className="p-2">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold">Tipos de Contrato</h4>
                  <ButtonWrapper />
              </div>
            </CardHeader>
              <ContractTypeTable data={contract_types} />
          </Card>
  )
}

export default ContractTypeWrapper