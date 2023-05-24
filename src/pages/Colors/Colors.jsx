import Tabs from '../../components/Tabs/Tabs'
import { Route, Routes } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import ColorsList from './List/ColorsList'
import ColorsCreate from './Create/ColorsCreate'
import ColorsUpdate from './Update/ColorsUpdate'
import ColorsView from './View/ColorsView'

const tabList = [
    {
        id: 1,
        link: '/colors',
        title: 'Все цвета'
    },
    {
        id: 2,
        title: 'Добавить цвет',
        link: '/colors/create'
    }
]

const Colors = () => {
    return (
        <div className='p-4 h-full'>
            <PageHeader title="Цвета" />
            <Tabs tabsList={tabList} />
            <Routes>
                <Route path="/" element={<ColorsList />} />
                <Route path="/create" element={<ColorsCreate />} />
                <Route path="/edit/:id" element={<ColorsUpdate />} />
                <Route path="/view/:id" element={<ColorsView />} />
            </Routes>
        </div>
    )
}

export default Colors