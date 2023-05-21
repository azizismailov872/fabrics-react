import { Modal } from '@mui/material';
import { Controller } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Form/Input/Input';
import ColorForm from '../../../components/Forms/Color/ColorForm';
import { Calculator, Dna, Hash, Palette, Scales } from "@phosphor-icons/react"
import SelectChip from '../../../components/Form/SelectChip/SelectChip';
import Select from '../../../components/Form/Select/Select';
import MaterialForm from '../../../components/Forms/Material/MaterialForm';

const FabricsUpdate = ({ register, control, errors, colors, materials, onSubmit, onReset, title, modal, openModal, closeModal }) => {

    return (
        <div className='pb-8 pt-2'>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-xl font-medium md:text-2xl  dark:text-primary-light text-dark-100'>{title}</h2>
                <div className='flex gap-3'>
                    <button onClick={() => openModal('colorForm')} className='text-stone-400'>Цвет +</button>
                    <button onClick={() => openModal('materialForm')} className='text-stone-400'>Материал +</button>
                </div>
            </div>
            <form onSubmit={onSubmit}>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-3'>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="model"
                            label="Модель"
                            icon={Hash}
                            inputProps={{ ...register('model') }}
                            size="small"
                            className="w-full"
                            error={!!errors.model}
                            errorMessage={errors?.model?.message && errors.model.message}
                        />
                    </div>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="quantity"
                            label="Колличество (рул)"
                            icon={Calculator}
                            inputProps={{ ...register('quantity') }}
                            size="small"
                            type="number"
                            className="w-full"
                            error={!!errors.quantity}
                            errorMessage={errors?.quantity?.message && errors.quantity.message}
                        />
                    </div>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="weight"
                            label="Вес (кг)"
                            icon={Scales}
                            inputProps={{ ...register('weight') }}
                            size="small"
                            type="number"
                            className="w-full"
                            error={!!errors.weight}
                            errorMessage={errors?.weight?.message && errors.weight.message}
                        />
                    </div>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Controller
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    size="small"
                                    label="Материал"
                                    className="w-full"
                                    icon={Dna}
                                    minWidth="180px"
                                    optionLabel="name"
                                    optionValue="id"
                                    options={
                                        materials?.data?.data ? materials.data.data : []
                                    }
                                    error={!!errors.material_id}
                                    errorMessage={errors?.material_id?.message && errors?.material_id?.message}
                                />
                            )
                            }
                            name="material_id"
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Controller
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    size="small"
                                    label="Цвет"
                                    className="w-full"
                                    icon={Palette}
                                    minWidth="180px"
                                    optionLabel="name"
                                    optionValue="id"
                                    options={
                                        colors?.data?.data ? colors.data.data : []
                                    }
                                    error={!!errors.color_id}
                                    errorMessage={errors?.color_id?.message && errors?.color_id?.message}
                                />
                            )
                            }
                            name="color_id"
                            control={control}
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className='mt-4 flex gap-3'>
                    <Button type="submit">Отправить</Button>
                    <Button onClick={onReset} type="button" secondary>Очистить</Button>
                </div>
            </form>
            <Modal
                open={modal.isOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {
                    modal.modal === 'colorForm' ?
                        <ColorForm onSuccessFn={closeModal} /> : modal.modal === 'materialForm' ?
                            <MaterialForm onSuccessFn={closeModal} /> : <div>No modal</div>
                }

            </Modal>
        </div>
    )
}
export default FabricsUpdate