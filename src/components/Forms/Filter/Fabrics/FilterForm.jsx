import useMeasure from 'react-use-measure';
import Button from '../../../Button/Button';
import Input from '../../../Form/Input/Input';
import { useSpring, animated } from '@react-spring/web';
import { Calculator, Dna, Hash, Palette,Scales } from "@phosphor-icons/react";
import { Controller } from 'react-hook-form';
import SelectChip from '../../../Form/SelectChip/SelectChip';
import Select from '../../../Form/Select/Select';


const FilterForm = ({ isVisible, register,control, onSubmit, reset, watch, errors, colors, materials, ...props }) => {

    const [measureRef, { height }] = useMeasure();

    const styles = useSpring({
        from: {
            height: 0
        },
        to: {
            height: isVisible ? height : 0
        }
    });

    const isDisabled = (inputName) => {
        if (inputName === 'quantity') {
            return watch("quantity_from") || watch("quantity_to") ? true : false
        }

        if (inputName === 'weight') {
            return watch("weight_from") || watch("weight_to") ? true : false
        }
    }

    return (
        <animated.div style={styles} className="overflow-hidden mb-4">
            <div ref={measureRef} className='px-4 py-4 bg-primary-light dark:bg-black-40 rounded-md'>
                <form onSubmit={onSubmit}>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-3 mb-3'>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
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
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="quantity"
                                label="Колличество (рул)"
                                icon={Calculator}
                                inputProps={{ ...register('quantity') }}
                                size="small"
                                className="w-full"
                                type="number"
                                disabled={isDisabled('quantity')}
                                error={!!errors.quantity}
                                errorMessage={errors?.quantity?.message && errors.quantity.message}
                            />
                        </div>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="quantity_from"
                                label="Колличество от (рул)"
                                icon={Calculator}
                                inputProps={{ ...register('quantity_from') }}
                                size="small"
                                className="w-full"
                                type="number"
                                error={!!errors.quantity_from}
                                errorMessage={errors?.quantity_from?.message && errors.quantity_from.message}
                            />
                        </div>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="quantity_to"
                                label="Колличество до (рул)"
                                icon={Calculator}
                                inputProps={{ ...register('quantity_to') }}
                                size="small"
                                className="w-full"
                                type="number"
                                error={!!errors.quantity_to}
                                errorMessage={errors?.quantity_to?.message && errors.quantity_to.message}
                            />
                        </div>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="weight"
                                label="Вес (кг)"
                                icon={Scales}
                                inputProps={{ ...register('weight') }}
                                size="small"
                                type="number"
                                className="w-full"
                                disabled={isDisabled('weight')}
                                error={!!errors.weight}
                                errorMessage={errors?.weight?.message && errors.weight.message}
                            />
                        </div>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="weight_from"
                                label="Вес от (кг)"
                                icon={Scales}
                                inputProps={{ ...register('weight_from') }}
                                size="small"
                                type="number"
                                className="w-full"
                                error={!!errors.weight_from}
                                errorMessage={errors?.weight_from?.message && errors.weight_from.message}
                            />
                        </div>
                        <div className="grow md:grow-0 shrink-0 md:basis-[17rem]">
                            <Input
                                name="weight_to"
                                label="Вес до (кг)"
                                icon={Scales}
                                inputProps={{ ...register('weight_to') }}
                                size="small"
                                type="number"
                                className="w-full"
                                error={!!errors.weight_to}
                                errorMessage={errors?.weight_to?.message && errors.weight_to.message}
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
                                        error={!!errors.materials}
                                        errorMessage={errors?.materials?.message && errors?.materials?.message}
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
                                        error={!!errors.colors}
                                        errorMessage={errors?.colors?.message && errors?.colors?.message}
                                    />
                                )
                                }
                                name="color_id"
                                control={control}
                                defaultValue=""
                            />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <Button size="small" minWidth="140px" type="submit">Поиск</Button>
                        <Button onClick={() => reset()} secondary size="small" minWidth="140px" type="button">Очистить</Button>
                    </div>
                </form>
            </div>
        </animated.div>
    )
}

export default FilterForm