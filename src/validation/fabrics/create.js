import * as yup from 'yup';

export const createSchema = yup.object({
    model: yup.string().required('Введите название модели').min(4,'Введите минимум 4 символа'),
    quantity: yup.number().min(0,'Минимальное число может быть только - 0').typeError('Поле колличество обязательно к заполнению и должно быть числом').required('Поле колличество обязательно к заполнению'),
    materials: yup.string('Поле материалы должно быть строкой').nullable()
}).required()