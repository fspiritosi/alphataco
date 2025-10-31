'use client'
import { CreateButton } from '@/shared/components/createBtn/CreateButton'
import { DiagramTypeDialog } from './diagrams-type-dialog'
import { useState } from 'react'

import { diagram_type_type } from '@/modules/empleados/actions/config_actions'
import { create_diagram_type } from '@/modules/empleados/actions/config_actions'

export  function ButtonWrapper() {
    const [open, setOpen] = useState(false)
    const handleSave = async (payload: Omit<diagram_type_type[0], "id" | "created_at">) => {
  await create_diagram_type(payload)
      
}


  return (
    <>
     <CreateButton title="Agregar Tipo de Diagrama"   onClick={() =>{setOpen(true)}}/>
     <DiagramTypeDialog open={open} onOpenChange={() => setOpen(false)} diagram_type={null} onSave={handleSave} />
    </>
    
  )
}

