import { House,Plus,Palette,TShirt,Swatches,Truck,Scroll,Table,ArrowFatLineDown,ArrowFatLineUp,ArrowsDownUp, Dna  } from "@phosphor-icons/react";

const menuList = [
    {
        id: 1,
        title: 'Главная',
        link: '/',
        icon: House 
    },
    {
        id: 2,
        title: 'Ткани',
        link: '/fabrics',
        icon: Scroll,
        childrens: [
            {
                id: 9,
                title: 'Все модели',
                link: '/fabrics',
                icon: Table
            },
            {
                id: 10,
                title: 'Добавить модель',
                link: '/fabrics/create',
                icon: Plus
            },
        ]
    },
    {
        id: 3,
        title: 'Продукция',
        link: '/products',
        icon: TShirt,
        childrens: [
            {
                id: 11,
                title: 'Все модели',
                link: '/products',
                icon: Table
            },
            {
                id: 12,
                title: 'Добавить модель',
                link: '/products/create',
                icon: Plus
            },
        ]
    },
    {
        id: 4,
        title: 'Ввоз/Вывоз Тканей',
        link: '/logs/fabrics',
        icon: Truck,
        childrens: [
            {
                id: 13,
                title: 'Ввоз и вывоз',
                link: '/logs/fabrics',
                icon: ArrowsDownUp
            },
            {
                id: 14,
                title: 'Завоз тканей',
                link: '/logs/fabrics/imports',
                icon: ArrowFatLineDown
            },
            {
                id: 15,
                title: 'Вывоз тканей',
                link: '/logs/fabrics/exports',
                icon: ArrowFatLineUp
            },
            {
                id: 12,
                title: 'Добавить запись',
                link: '/logs/fabrics/create',
                icon: Plus
            },
        ]
    },
    {
        id: 5,
        title: 'Ввоз/Вывоз продукции',
        link: '/journal/products',
        icon: Truck,
        childrens: [
            {
                id: 16,
                title: 'Ввоз и вывоз продукции',
                link: '/journal/products',
                icon: ArrowsDownUp
            },
            {
                id: 17,
                title: 'Ввоз продукции',
                link: '/journal/products/import',
                icon: ArrowFatLineDown
            },
            {
                id: 18,
                title: 'Вывоз продукции',
                link: '/journal/products/export',
                icon: ArrowFatLineUp
            },
        ]
    },
    {
        id: 6,
        title: 'Цвета',
        link: '/colors',
        icon: Palette,
        childrens: [
            {
                id: 19,
                title: 'Все цвета',
                link: '/colors',
                icon: Table
            },
            {
                id: 20,
                title: 'Добавить цвет',
                link: '/colors/create',
                icon: Plus
            },
        ] 
    },
    {
        id: 7,
        title: 'Материалы',
        link: '/materials',
        icon: Dna,
        childrens: [
            {
                id: 19,
                title: 'Все материалы',
                link: '/materials',
                icon: Table
            },
            {
                id: 20,
                title: 'Добавить материал',
                link: '/materials/create',
                icon: Plus
            },
        ]  
    },
    {
        id: 8,
        title: 'Размеры',
        link: '/sizes',
        icon: Swatches
    },
]

export default menuList