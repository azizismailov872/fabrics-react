import { Modal } from '@mui/material'
import { Controller } from 'react-hook-form'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Form/Input/Input'
import ColorForm from '../../../components/Forms/Color/ColorForm'
import SelectChip from '../../../components/Form/SelectChip/SelectChip'
import { Calculator, Dna, Hash, Palette } from "@phosphor-icons/react"

const FabricsCreate = ({ register, control, onSubmit, onReset, errors, colorOptions, modal, openModal, closeModal }) => (
    <div className='pb-8 pt-2'>
        <div className='flex justify-between mb-5 items-center'>
            <h2 className='text-xl font-medium md:text-2xl dark:text-primary-light text-dark-100'>Добавить модель</h2>
            <button onClick={() => openModal('colorForm')} className='text-stone-400'>Добавить цвет +</button>
        </div>
        <form onSubmit={onSubmit} className='py-3 px-1'>
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
                        label="Колличество"
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
                        name="materials"
                        label="Материалы"
                        icon={Dna}
                        inputProps={{ ...register('materials') }}
                        size="small"
                        className="w-full"
                        error={!!errors.materials}
                        errorMessage={errors?.materials?.message && errors?.materials?.message}
                    />
                </div>
                <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                    <Controller
                        render={({ field }) => (
                            <SelectChip
                                {...field}
                                size="small"
                                label="Цвета"
                                className="w-full"
                                icon={Palette}
                                minWidth="180px"
                                optionLabel="name"
                                options={colorOptions}
                                error={!!errors.colors}
                                errorMessage={errors?.colors?.message && errors?.colors?.message}
                            />
                        )
                        }
                        name="colors"
                        control={control}
                        defaultValue={[]}
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
            <ColorForm onSuccessFn={closeModal} />
        </Modal>
    </div>
)

export default FabricsCreate