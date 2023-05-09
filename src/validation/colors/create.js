import * as yup from 'yup';

export const createSchema = yup.object({
    name: yup.string().min(5,'Введите минимум 5 символов').required('Введите название цвета'),
    hex_code: yup.string('Код цвета должен бытб строкой').nullable()
}).required()