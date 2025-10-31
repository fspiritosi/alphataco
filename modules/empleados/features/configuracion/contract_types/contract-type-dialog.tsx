"use client"

import { useEffect, useState } from "react"
import { Button } from "@/shared/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { contract_type_type } from '@/modules/empleados/actions/config_actions'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"


type ContractTypeDialogProps = {
  open: boolean
  onOpenChange: (_open: boolean) => void
  contract_type: contract_type_type[0] | null
  onSave: (_contract_type: Omit<contract_type_type[0], "id" | "created_at" >) => void
}

export function ContractTypeDialog({ open, onOpenChange, contract_type, onSave }: ContractTypeDialogProps) {
const [formData, setFormData] = useState<Omit<contract_type_type[0], "id" | "created_at">>({
  name: "",
  description: "",
  is_active: false,
})

  useEffect(() => {
    if (contract_type) {
setFormData({
  name: contract_type.name,
  description: contract_type.description ?? "",
  is_active: contract_type.is_active,
})  
    } else {
      setFormData({
        name: "",
        description: "",
        is_active: false,
      })
    }
  }, [contract_type, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">{contract_type ? "Editar Tipo de Contrato" : "Agregar Nuevo Tipo de Contrato"}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {contract_type ? "Actualiza la información del tipo de contrato" : "Completa los datos del nuevo tipo de contrato"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-foreground">
                Nombre del tipo de contrato
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Ana García"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-foreground">
                Descripción
              </Label>
              <Input
                id="description"
                value={formData.description ?? ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="usuario@empresa.com"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status" className="text-foreground">
                Estado
              </Label>
      <Select
  value={formData.is_active ? "active" : "inactive"}
  onValueChange={(value) =>
    setFormData({ ...formData, is_active: value === "active" })
  }
>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="inactive">Inactivo</SelectItem>
                 
                </SelectContent>
              </Select>
            </div>

          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-border">
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {contract_type ? "Guardar Cambios" : "Agregar Tipo de Contrato"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
