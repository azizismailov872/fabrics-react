import { Plus, Eye, ArrowsDownUp, Trash, DotsThreeOutline } from '@phosphor-icons/react'
import PanelButton from '../PanelButton/PanelButton'
import '../../index.css'
import { IconButton, Menu, MenuItem } from '@mui/material';
import useMenu from '../../hooks/useMenu';

const Panel = ({ showResetSort, resetSort, isFilterVisible, setFilterVisible, modal, openModal, showDeleteBtn, onDelete, deleteRowsCount, ...props }) => {

    const [open, anchorEl, handleClick, handleClose] = useMenu();

    return (
        <div className='p-2 bg-primary-light dark:bg-black-40 rounded-md mb-4'>
            <div className='flex items-center flex-wrap sm:flex-nowrap'>
                <div className='flex gap-[10px]'>
                    <PanelButton active={isFilterVisible} onClickFn={() => setFilterVisible(prev => !prev)} title="Открыть форму поиска">
                        <Plus size={20} weight="bold" className='text-black-100 dark:text-primary-light' />
                    </PanelButton>
                    <PanelButton onClickFn={() => openModal('visibility')} onClose={modal.isOpen ? false : true} title="Показать/Скрыть поля">
                        <Eye size={20} weight="bold" className={'text-black-100 dark:text-primary-light'} />
                    </PanelButton>
                    <PanelButton onClickFn={() => openModal('sorting')} onClose={modal.isOpen ? false : true} title="Сортировка">
                        <ArrowsDownUp size={20} weight="bold" className='text-black-100 dark:text-primary-light' />
                    </PanelButton>
                </div>
                {
                    showDeleteBtn && (
                        <div className='border-l-2 border-l-black-80 dark:border-l-primary-light pl-2 ml-2 md:block hidden'>
                            <PanelButton toggable={false} title="Удалить" onClickFn={() => onDelete()}>
                                <Trash className='text-black-100 dark:text-primary-light' size={20} weight="bold" />
                            </PanelButton>
                            <span className='text-black-100 dark:text-primary-light font-medium'>Выбрано {deleteRowsCount ? deleteRowsCount : ''}</span>
                        </div>
                    )
                }
                {   

                    (showResetSort || showDeleteBtn) && (
                        <div className='md:border-none border-l-2 border-l-black-80 dark:border-l-primary-light pl-2 ml-2 md:ml-auto'>
                            {
                                showResetSort && (
                                    <button onClick={() => resetSort()} className='text-black-40 dark:text-white-40 whitespace-nowrap md:block  hidden'>Сбросить сортировку</button>
                                )
                            }
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
                                    {
                                        showDeleteBtn && (
                                            <MenuItem onClick={() => onDelete()}>
                                                Удалить {deleteRowsCount}
                                            </MenuItem>
                                        )
                                    }
                                    {
                                        showResetSort && (
                                            <MenuItem onClick={() => resetSort()}>
                                                Cбросить сортировку
                                            </MenuItem>
                                        )
                                    }
                                </Menu>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Panel