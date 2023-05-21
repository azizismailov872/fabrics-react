import * as yup from 'yup';

export const createSchema = yup.object({
    model: yup.string().required('Введите название модели').min(4,'Введите минимум 4 символа'),
    quantity: yup.number().min(0,'Минимальное число может быть только - 0').typeError('Поле колличество обязательно к заполнению и должно быть числом').required('Поле колличество обязательно к заполнению'),
    weight: yup.number().min(0,'Минимальное число может быть только - 0').typeError('Поле вес обязательно к заполнению и должно быть числом').required('Поле вес обязательно к заполнению'),
    material_id: yup.number().typeError('Материал должен быть выбран из списка').required('Выберите материал'),
    color_id: yup.number().typeError('Цвет должен быть выбран из списка').required('Выберите цвет'),
}).required()

export const filterSchema = yup.object().shape({
    model: yup.string().trim().nullable().transform((v, o) => (o === '' ? null : v)).min(1,'Введите название модели'),
    quantity: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
    quantity_from: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
    quantity_to: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
});

export const updateSchema = yup.object({
    model: yup.string().required('Введите название модели').min(4,'Введите минимум 4 символа'),
    quantity: yup.number().min(0,'Минимальное число может быть только - 0').typeError('Поле колличество обязательно к заполнению и должно быть числом').required('Поле колличество обязательно к заполнению'),
    weight: yup.number().min(0,'Минимальное число может быть только - 0').typeError('Поле вес обязательно к заполнению и должно быть числом').required('Поле вес обязательно к заполнению'),
    material_id: yup.number().typeError('Материал должен быть выбран из списка').required('Выберите материал'),
    color_id: yup.number().typeError('Цвет должен быть выбран из списка').required('Выберите цвет'),
}).required()