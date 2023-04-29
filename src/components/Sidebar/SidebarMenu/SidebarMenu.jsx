import React, { useMemo } from 'react'
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link, useMatch } from 'react-router-dom';

const SidebarMenu = ({menuList,collapsed,...props}) => {

    //const mode = useAppStore(state => state.mode);
    const mode = props.mode ? props.mode : 'light';

    const menuRootStyles = useMemo(() => {
        const sidebarBg = mode === 'light' ? '#fff' : '#2b2b37';

        return {
            '& .ps-submenu-content': {
                backgroundColor: sidebarBg,
                padding: collapsed ? '5px' : '3px 0px 0px 10px'
            },
            '& .ps-menu-button': {
                fontSize: '14px',
                borderRadius: '6px',
                height: '40px',
                padding: '2px 15px 2px 18px',
                position: 'relative',
                marginBottom: '4px'
            },
            '& .ps-menu-button:hover, .ps-menu-button.ps-active': {
                backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.4)',
                color: mode === 'light' ? '#1c1c1c' : '#95A4FC'
            },
            "& .ps-menu-button:hover::before, .ps-menu-button.ps-active::before": {
                content: '""',
                height: '50%',
                width: '3px',
                backgroundColor: mode === 'light' ? '#000' : '#95A4FC',
                borderRadius: '4.2px',
                marginRight: '6px',
                position: 'absolute',
                left: '5px',
                top: '25%'
            },
            '& .ps-menu-icon': {
                marginRight: '2px',
            },
            '&': {
                padding: '5px'
            },
            '& .ps-submenu-content .ps-menu-button': {
                paddingLeft: '13%'
            }
        }
    },[mode])


    return (
        <Menu rootStyles={menuRootStyles} className="text-black-100 dark:text-primary-light">
            {
                !!menuList?.length ? menuList.map(menu =>
                    !!menu.childrens ? (
                        <SubMenu 
                            active={(useMatch(`${menu.link}/*`) && collapsed)} 
                            defaultOpen={useMatch(`${menu.link}/*`)} 
                            key={menu.id} 
                            icon={<menu.icon size={24} weight="light" />} 
                            label={menu.title}
                        >
                            {menu.childrens.map(submenu =>
                                <MenuItem 
                                    active={useMatch(submenu.link)} 
                                    key={submenu.id} 
                                    icon={<submenu.icon size={24} weight="light" />} 
                                    component={<Link to={submenu.link} />}
                                >
                                    {submenu.title}
                                </MenuItem>
                            )}
                        </SubMenu>
                    ) : (
                        <MenuItem 
                            active={useMatch(menu.link)} 
                            key={menu.id} 
                            component={<Link to={menu.link} />} 
                            icon={<menu.icon size={24} weight="light" />}
                        >
                            {menu.title}
                        </MenuItem>
                    )
                ) : 
                <div className={`${collapsed ? 'hidden' : 'block pl-[21px] pr-1'}`}>
                    Нет пунктов меню
                </div>
            }
        </Menu>
    )
}

export default SidebarMenu