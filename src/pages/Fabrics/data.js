import { Calculator, Dna, Hash,Palette, Pencil } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const filterFields = [
    {
        id: 1,
        name: 'model',
        label: 'Модель',
        icon: Hash
    },
    {
        id: 2,
        name: 'quantity',
        label: 'Колличество',
        icon: Calculator,
        type: 'number'
    },
    {
        id: 3,
        name: 'quantity_from',
        label: 'Колличество от',
        icon: Calculator,
        type: 'number'
    },
    {
        id: 4,
        name: 'quantity_to',
        label: 'Колличество до',
        icon: Calculator,
        type: 'number'
    },
    {
        id: 5,
        name: 'materials',
        label: 'Материалы',
        icon: Dna,
    },
    {
        id: 6,
        name: 'colors',
        label: 'Цвета',
        icon: Palette

    }
]


export const dataTableColumns = [
    {   
        field: 'model',
        headerName: 'Модель',
        flex: 0.5,
        sortable: false,
    },
    {
        field: 'quantity',
        headerName: 'Колличество',
        cellClassName: 'quantity-column',
        flex: 0.5,
        sortable: false,
        renderCell: ({row: {quantity}}) => {
            return (
                <div>
                    <span>{quantity} рул.</span>
                </div>
            )
        }
    },
    {
        field: 'materials',
        headerName: 'Материалы',
        flex: 1,
        sortable: false,
        renderCell: ({row: {materials}}) => {
            return (
                <div>
                    <span>{(materials && materials !== '')  ? materials : 'Не указано'}</span>
                </div>
            )
        }
    },
    {   
        field: 'colors',
        headerName: 'Цвета',
        flex: 1,
        sortable: false,
        renderCell: ({row: {colors}}) => {
            return typeof colors === 'string' ? (
                    <div>
                        {
                            colors.substring(1, colors.length - 1) === 'NULL' ? <span>Нет цвета</span> : 
                            <span>{colors.substring(1, colors.length - 1)}</span>
                        }
                    </div>
            ) : (
                <div>
                    <span>{colors.length > 0 ? colors.map(color => `${color.name}, `) : 'Нет цвета'}</span>
                </div>
            )
        }
    
    },
    {
        field: "action",
        headerName: "Изменить",
        sortable: false,
        renderCell: (params) => {
          return <Link to={`/fabrics/edit/${params.id}`}><Pencil size={22} weight="light" /></Link>;
        }
    }
]

export const defaultVisibleColumns = {
    model: true,
    quantity: true,
    materials: true,
    colors: true,
}

export const visibilityFormFields = [
    {
        id: 1,
        name: 'model',
        label: 'Модель',
    },
    {
        id: 2,
        name: 'quantity',
        label: 'Колличество',
    },
    {
        id: 3,
        name: 'materials',
        label: 'Материалы',
    },
    {
        id: 4,
        name: 'colors',
        label: 'цвета',
    },
]

export const defaultSortingModel = {
    sortBy: 'created_at',
    sort: 'desc'
}

export const sortByOptions = [
    {   
        label: 'Дата добавления',
        value: 'created_at',
    },
    {   
        label: 'Модель',
        value: 'model',
    },
    {
        label: 'Колличество',
        value: 'quantity',
    },
    {   
        label: 'Материалы',
        value: 'materials',
    },
    {
        label: 'Цвета',
        value: 'colors',
    },
]

export const sortOptions = [
    {
        label: 'По возрастанию',
        value: 'asc'
    },
    {
        label: 'По убыванию',
        value: 'desc'
    }
]

