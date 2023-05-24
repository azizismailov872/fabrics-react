import Wrapper from './components/Wrapper/Wrapper'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Fabrics from './pages/Fabrics/Fabrics'
import Products from './pages/Products/Products'
import Materials from './pages/Materials/Materials'

const App = () => {

    return (
        <Wrapper>
            <Sidebar />
            <Content>
                <Header  />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/fabrics/*" element={<Fabrics />} />
                    <Route path="/products/*" element={<Products />} />
                    <Route path="/materials/*" element={<Materials />} />
                    <Route path="/login" element={<Navigate to="/" />} />
                </Routes>
            </Content>
        </Wrapper>

    )
}

export default App