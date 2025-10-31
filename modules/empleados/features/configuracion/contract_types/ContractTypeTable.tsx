'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { Badge } from "@/shared/components/ui/badge"
import { DataTable } from "@/shared/components/tables/data-table"
import { DataTableColumnHeader } from "@/shared/components/tables/data-table-column-header"
import { DataTableRowActions } from "@/shared/components/tables/data-table-row-actions"
import { contract_type_type } from "@/modules/empleados/actions/config_actions"
import { use } from "react"

//definir el tipo de dato
interface ContractTypeTableProps {
    data: Promise<contract_type_type>
}

const statuses = [
    { value: true, label: "Activo" },
    { value: false, label: "Inactivo" },
]

//definisión de columnas

export const columns: ColumnDef<contract_type_type[number]>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox 
                checked={
                    table.getIsSomePageRowsSelected() || 
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox 
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Nombre" />
        ),
        cell: ({row}) => (
            <div className="flex space-x-2">
                <span className="max-w-[500px] truncate font-medium">
                    {row.getValue("name")}
                </span>
            </div>
        )
    },
    {
        accessorKey: "description",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Descripción" />
        ),
        cell: ({row}) => (
            <div className="flex space-x-2">
                <span className="max-w-[500px] truncate font-medium">

                    {row.getValue("description") || "-"}
                </span>
            </div>
        )
    },
     {
        accessorKey: "is_active",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Estado" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("is_active") as boolean
            return (
               status ? (  
                        <Badge variant="success" className="capitalize">
                            Activo
                        </Badge>
                    ) : (
                        <Badge variant="destructive" className="capitalize">
                            Inactivo
                        </Badge>
                    )
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <DataTableRowActions
                row={row}
                actions={[
                    {
                        label: "Editar",
                        onClick: (contract_type) => console.log("Edit task:", contract_type), 
                    },
                    {
                        label: "Eliminar",
                        onClick: (contract_type) => console.log("Delete task:", contract_type),
                        variant: "destructive",
                    },
                ]}
            />
        ),
    },
]

export function ContractTypeTable({ data }: ContractTypeTableProps) {
    const contract_types = use(data)
    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={contract_types}
                searchKey="name"
                searchPlaceholder="Buscar tipo de contrato..."
                 filters={[
                    {
                        columnKey: "is_active",
                        title: "Estado",
                        options: statuses as any,
                    },
                ]}
            />
        </div>
    )
}