import * as yup from 'yup';

export const createSchema = yup.object({
    name: yup.string().min(3,'Введите минимум 3 символов').required('Введите название материала'),
}).required()

export const updateSchema = yup.object({
    name: yup.string().min(3,'Введите минимум 3 символов').required('Введите название материала'),
}).required()