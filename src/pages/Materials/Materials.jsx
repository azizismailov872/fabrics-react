import Tabs from '../../components/Tabs/Tabs'
import { Route, Routes } from 'react-router-dom'
import MaterialsList from './List/MaterialsList'
import MaterialsCreate from './Create/MaterialsCreate'
import MaterialsUpdate from './Update/MaterialsUpdate'
import PageHeader from '../../components/PageHeader/PageHeader'
import MaterialsView from './View/MaterialsView'

const tabList = [
    {
        id: 1,
        link: '/materials',
        title: 'Все материалы'
    },
    {
        id: 2,
        title: 'Добавить материал',
        link: '/materials/create'
    }
]

const Materials = () => {
    return (
        <div className='p-4 h-full'>
            <PageHeader title="Материалы" />
            <Tabs tabsList={tabList} />
            <Routes>
                <Route path="/" element={<MaterialsList />} />
                <Route path="/create" element={<MaterialsCreate />} />
                <Route path="/edit/:id" element={<MaterialsUpdate />} />
                <Route path="/view/:id" element={<MaterialsView />} />
            </Routes>
        </div>
    )
}

export default Materials