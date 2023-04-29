import { Plus, Eye, ArrowsDownUp, Gear, Trash, DotsThreeOutline } from '@phosphor-icons/react'
import PanelButton from '../PanelButton/PanelButton'
import '../../index.css'
import { useState } from 'react';
import { IconButton, Menu, MenuItem, Modal } from '@mui/material';
import useMenu from '../../hooks/useMenu';

const Panel = ({ showResetSort }) => {

    const [open, anchorEl, handleClick, handleClose] = useMenu();

    return (
        <div className='p-2 bg-primary-light dark:bg-black-40 rounded-md mb-4'>
            <div className='flex items-center flex-wrap sm:flex-nowrap'>
                <div className='flex gap-[5px]'>
                    <PanelButton active={true} title="Открыть форму поиска">
                        <Plus size={20} weight="bold" className='text-black-100 dark:text-primary-light' />
                    </PanelButton>
                    <PanelButton title="Показать/Скрыть поля">
                        <Eye size={20} weight="bold" className={'text-black-100 dark:text-primary-light'} />
                    </PanelButton>
                    <PanelButton title="Сортировка">
                        <ArrowsDownUp size={20} weight="bold" className='text-black-100 dark:text-primary-light' />
                    </PanelButton>
                    <PanelButton title="Настройки">
                        <Gear size={20} weight="bold" className='text-black-100 dark:text-primary-light' />
                    </PanelButton>
                </div>
                <div className='border-l-2 border-l-black-80 pl-2 ml-2 md:block hidden'>
                    <PanelButton toggable={false} title="Удалить" onClickFn={() => alert('DElete')}>
                        <Trash className='text-black-100 dark:text-primary-light' size={20} weight="bold" />
                    </PanelButton>
                    <span className='text-black-100 dark:text-primary-light font-medium'>Выбрано 305</span>
                </div>
                <div className='md:border-none border-l-2 border-l-black-80 pl-2 ml-2 md:ml-auto'>
                    <button onClick={() => alert('Сброс сортировки')} className='text-black-40 whitespace-nowrap md:block  hidden'>Сбросить сортировку</button>
                    <div className='md:hidden block'>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <DotsThreeOutline className='text-black-100 dark:text-primary-light' size={20} weight="bold" />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => alert('Удалить')}>
                                Удалить (305)
                            </MenuItem>
                            <MenuItem onClick={() => alert('сбросить сортировку')}>
                                Cбросить сортировку
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel