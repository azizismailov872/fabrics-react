import { Eye, Pencil } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const dataTableColumns = [
    {   
        field: 'name',
        headerName: 'Название',
        flex: 0.5,
        sortable: false,
        disableColumnMenu: true,
    },
    {
        field: "fabrics",
        headerName: "Ткани",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.2,
        renderCell: (params) => {
          return <Link to={`/fabrics?material_id=${params.id}`}>Посмотреть ткани</Link>;
        }
    },
    {
        field: "view",
        headerName: "Подробнее",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.1,
        renderCell: (params) => {
          return <Link to={`/materials/view/${params.id}`}><Eye size={22} weight="light" /></Link>;
        }
    },
    {
        field: "edit",
        headerName: "Изменить",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.1,
        renderCell: (params) => {
          return <Link to={`/materials/edit/${params.id}`}><Pencil size={22} weight="light" /></Link>;
        }
    }
]