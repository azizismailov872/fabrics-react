import { Avatar, IconButton } from '@mui/material';
import { Sidebar as SidebarIcon } from '@phosphor-icons/react';
import { Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar';
import {Link} from 'react-router-dom'
import menuList from './menuList';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import '../../index.css'
import useAppStore from '../../store/store';
import useLogout from '../../hooks/useLogout';

const Sidebar = (props) => {

    const mode = useAppStore(state => state.mode);
    //const mode = props.mode ? props.mode : 'light';

    const { collapsed, collapseSidebar } = useProSidebar();

    const border = mode === 'light' ? '1.5px solid rgba(0, 0, 0, 0.1)' : '1.5px solid #1c1c1c'

    const sidebarBg = mode === 'light' ? '#fff' : '#2b2b37';

    const logout = useLogout()

    const userId = useAppStore(state => state.user.id)

    return (
        <ProSidebar breakPoint='md' rootStyles={{
            height: '100%',
            borderRight: border,
            overflowY: 'hidden',
            '& .ps-sidebar-container': {
                paddingTop: '20px',
            }
        }}
            backgroundColor={sidebarBg}
        >
            <div className={`flex justify-between ${collapsed ? 'px-[23px] mb-3' : 'pl-8 pr-3 py-3'}`}>
                {
                    !collapsed &&
                    <div className='flex items-center'>
                        <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" />
                        <span className='ml-2 text-black-100 dark:text-primary-light'>Aziz ismailov</span>
                    </div>
                }
                <IconButton onClick={() => collapseSidebar(!collapsed)}>
                    <SidebarIcon size={22} weight='light' className='text-black-100 dark:text-primary-light md:block hidden' />
                </IconButton>
            </div>
            <div className={`py-2 pl-8 ${collapsed ? 'hidden' : 'block mb-3'}`}>
                <ul>
                    <li className='mb-3'>
                        <Link to={`/profile/${userId}`} className='inline-flex font-semibold items-center gap-4 text-black-100 dark:text-primary-light'>
                            <span className='w-[4px] h-[4px] rounded-full bg-black-20 dark:bg-secondary-purple-dark block'></span>
                            <span>Профиль</span>
                        </Link>
                    </li>
                    <li>
                        <a onClick={(e) => {
                            e.preventDefault()
                            logout()
                        }} href="logout" className='inline-flex items-center font-semibold gap-4 text-black-100 dark:text-primary-light'>
                            <span className='w-[4px] h-[4px] rounded-full bg-black-20 block dark:bg-secondary-purple-dark'></span>
                            <span>Выйти</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`pl-8 ${collapsed ? 'hidden' : 'block mb-1'}`}>
                <span className='font-semibold text-black-40 dark:text-primary-light'>Панель управления</span>
            </div>
            <SidebarMenu
                menuList={menuList}
                collapsed={collapsed}
                mode={mode}
            />
        </ProSidebar>
    )
}

export default Sidebar