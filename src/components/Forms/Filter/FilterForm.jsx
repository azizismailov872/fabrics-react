import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';

import Button from '../../Button/Button';
import Input from '../../Form/Input/Input';


const FilterForm = ({ isVisible, fields, register, onSubmit,reset,watch,errors, ...props }) => {

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
        if(inputName === 'quantity') {
            return watch("quantity_from") || watch("quantity_to") ? true : false
        }
    }

    return (
        <animated.div style={styles} className="overflow-hidden mb-4">
            <div ref={measureRef} className='px-4 py-4 bg-primary-light dark:bg-black-40 rounded-md'>
                <form onSubmit={onSubmit}>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-2 mb-3'>
                        {
                            fields?.length && fields.map(field =>
                                <div className={`shrink mb-2`} key={field.id}>
                                    <Input
                                        name={field.name}
                                        label={field.label}
                                        icon={field.icon}
                                        inputProps={{ ...register(field.name) }}
                                        type={field.type ? field.type : 'default'}
                                        size="small"
                                        className="w-full md:w-auto"
                                        disabled={isDisabled(field.name)}
                                        error={!!errors[field.name]}
                                        errorMessage={errors[field.name]?.message && errors[field.name].message }
                                    />
                                </div>
                            )
                        }
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