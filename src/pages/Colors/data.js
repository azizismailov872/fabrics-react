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
        field: 'hex_code',
        headerName: 'цвет',
        flex: 0.5,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({row}) => {
            return row?.hex_code ? <div className="block w-[30px] h-[15px]" style={{backgroundColor: row.hex_code}}></div> : <span>Пусто</span>
        }
    },
    {
        field: "fabrics",
        headerName: "Ткани",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.5,
        renderCell: (params) => {
          return <Link to={`/fabrics?color_id=${params.id}`}>Посмотреть ткани</Link>;
        }
    },
    {
        field: "view",
        headerName: "Подробнее",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.3,
        renderCell: (params) => {
          return <Link to={`/colors/view/${params.id}`}><Eye size={22} weight="light" /></Link>;
        }
    },
    {
        field: "edit",
        headerName: "Изменить",
        sortable: false,
        disableColumnMenu: true,
        flex: 0.3,
        renderCell: (params) => {
          return <Link to={`/colors/edit/${params.id}`}><Pencil size={22} weight="light" /></Link>;
        }
    }
]