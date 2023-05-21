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
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
    },
    {
        field: 'quantity',
        headerName: 'Колличество',
        cellClassName: 'quantity-column',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({row: {quantity}}) => {
            return (
                <div>
                    <span>{quantity} рул.</span>
                </div>
            )
        }
    },
    {
        field: 'weight',
        headerName: 'Вес',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({row: {weight}}) => {
            return (
                <div>
                    <span>{weight} кг.</span>
                </div>
            )
        }
    },
    {   
        field: 'color',
        headerName: 'Цвет',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({row: {color}}) => {
            return (
                <div>
                    <span>
                        {
                            typeof color === 'string' ? color : color ? color.name : 'Не указано'
                        }
                    </span>
                </div>
            )
        }
    
    },
    {   
        field: 'material',
        headerName: 'Материал',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({row: {material}}) => {
            return (
                <div>
                    <span>
                        {
                            (typeof material === 'string') ? material : material  ? material.name : 'Не укзаано'
                        }
                    </span>
                </div>
            )
        }
    
    },
    {
        field: "action",
        headerName: "Изменить",
        sortable: false,
        disableColumnMenu: true,
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
        name: 'material',
        label: 'Материал',
    },
    {
        id: 4,
        name: 'color',
        label: 'Цвет',
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

