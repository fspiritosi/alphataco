'use client'
import { CreateButton } from '@/shared/components/createBtn/CreateButton'
import { ContractTypeDialog } from './contract-type-dialog'
import { useState } from 'react'
import { create_contract_type } from '@/modules/empleados/actions/config_actions'
import { contract_type_type } from '@/modules/empleados/actions/config_actions'

export  function ButtonWrapper() {
    const [open, setOpen] = useState(false)
    const handleSave = async (payload: Omit<contract_type_type[0], "id" | "created_at">) => {
  await create_contract_type(payload)
      
}


  return (
    <>
     <CreateButton title="Agregar Tipo de Contrato"   onClick={() =>{setOpen(true)}}/>
     <ContractTypeDialog open={open} onOpenChange={() => setOpen(false)} contract_type={null} onSave={handleSave} />
    </>
    
  )
}

