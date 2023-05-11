import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Tabs from '../../components/Tabs/Tabs'
import PageHeader from '../../components/PageHeader/PageHeader'
import FabricsUpdateContainer from './Update/FabricsUpdateContainer'
import FabricsCreateContainer from './Create/FabricsCreateContainer'
import FabricsListContainer from './List/FabricsListContainer'

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
                <Route path="/" element={<FabricsListContainer />} />
                <Route path="/create" element={<FabricsCreateContainer />} />
                <Route path="/edit/:id" element={<FabricsUpdateContainer />} />
            </Routes>
        </div>
    )
}

export default Fabrics