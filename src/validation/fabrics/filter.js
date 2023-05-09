import * as yup from "yup";


const filterSchema = yup.object().shape({
    model: yup.string().trim().nullable().transform((v, o) => (o === '' ? null : v)).min(1,'Введите название модели'),
    materials: yup.string().trim().nullable().transform((v, o) => (o === '' ? null : v)).min(2,'Введите корректные данные'),
    colors: yup.string().trim().nullable().transform((v, o) => (o === '' ? null : v)).min(2,'Введите корректные данные'),
    quantity: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
    quantity_from: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
    quantity_to: yup.number().min(0,'Введите корреткное число').transform((value) => (isNaN(value) ? null : value)).nullable(),
});

export default filterSchema