import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { List, SignOut, Gear } from '@phosphor-icons/react';
import { useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import useAppStore from '../../store/store';
import ModeButtons from '../ModeButtons/ModeButtons';
import useLogout from '../../hooks/useLogout';


const Header = (props) => {

    const mode = useAppStore(state => state.mode)
    //const mode = props.mode ? props.mode : 'light';

    const { toggled, toggleSidebar } = useProSidebar()

    const borderB = mode === 'light' ? '1.5px solid rgba(0, 0, 0, 0.1)' : '1.5px solid #1c1c1c'

    const menuBg = mode === 'light' ? '#fff' : '#2b2b37';

    const [open, anchorEl, handleClick, handleClose] = useMenu();

    const logout = useLogout()

    const userId = useAppStore(state => state.user.id)

    return (
        <header className='px-4 py-1 bg-white-100 dark:bg-primary-darkBlue' style={{ borderBottom: borderB }}>
            <nav className='flex justify-between md:justify-end'>
                <div className='md:hidden block'>
                    <IconButton onClick={() => toggleSidebar(!toggled)}>
                        <List className='text-black-100 dark:text-primary-light' size={25} />
                    </IconButton>
                </div>
                <div className='flex gap-2 items-center'>
                    <ModeButtons />
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '& .MuiList-root': {
                                    backgroundColor: menuBg,
                                    padding: '1px 0px',
                                    border: mode === 'light' ? 'none' : '1px solid #1c1c1c'
                                },
                                '& .MuiMenuItem-root': {
                                    paddingTop: '6px',
                                    paddingBottom: '6px',
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: menuBg,
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 1,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem className='text-black-100 dark:text-primary-light' onClick={handleClose}>
                            <ListItemIcon>
                                <Gear className='text-black-100 dark:text-primary-light' size={24} weight="light" />
                            </ListItemIcon>
                            <Link to={`/profile/${userId}`} className='text-black-100 dark:text-primary-light'>Профиль</Link>
                        </MenuItem>
                        <MenuItem onClick={() => logout()}>
                            <ListItemIcon>
                                <SignOut className='text-red-600' size={24} weight="light" />
                            </ListItemIcon>
                            <span className='text-red-600'>Выйти</span>  
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
        </header>
    )
}

export default Header