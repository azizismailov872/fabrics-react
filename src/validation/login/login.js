import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email('Введите корректный email').required('Введите свой email'),
  password: yup.string().min(8,'Пароль должен состоять более чем из 8 символов').max(32).required('Введите пароль'),
});