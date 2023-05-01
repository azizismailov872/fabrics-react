import React from 'react'
import {Routes,Route} from 'react-router-dom'
import FabricsList from './List/FabricsList'
import FabricsCreate from './Create/FabricsCreate'
import FabricsUpdate from './Update/FabricsUpdate'
import Tabs from '../../components/Tabs/Tabs'
import PageHeader from '../../components/PageHeader/PageHeader'

const tabList = [
    {
        id: 1,
        link: '/fabrics',
        title: 'Все модели'
    },
    {
        id: 2,
        title: 'Добавить модель',
        link: '/fabrics/create'
    }
]

const Fabrics = () => {

    return (
        <div className='p-4 h-full'>
            <PageHeader title="Ткани" />
            <Tabs tabsList={tabList} />
            <Routes>
                <Route path="/" element={<FabricsList />} />
                <Route path="/create" element={<FabricsCreate />} />
                <Route path="/edit/:id" element={<FabricsUpdate />} />
            </Routes>
        </div>
    )
}

export default Fabrics