import { useForm } from "react-hook-form";
import FileInput from "./FileInput";


export default {
    title: 'Components/FileInput',
    component: FileInput,
    tags: ['autodocs'],
}

const Template = args => {

    const {register,unregister,handleSubmit,setValue,watch,setError,formState: {errors}} = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
        alert(JSON.stringify(formData))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FileInput 
                {...args} 
                register={register} 
                unregister={unregister} 
                setValue={setValue} 
                watch={watch} 
                setError={setError}  
                error={args.error ? args.error : !!errors.files}
                errorMessage={args.errorMessage ? args.errorMessage : errors?.files?.message}
            />
            <div>
                <button className="mt-2 px-3 py-1 rounded-md bg-cyan-700 text-white" type="submit">Отправить</button>
            </div>
        </form>
    )
}

export const Default = Template.bind({})

Default.args =  {
    name: 'files',
}

export const Multiple = Template.bind({})

Multiple.args =  {
    name: 'files',
    multiple: true
}

export const AcceptOnlyXcel = Template.bind({})

AcceptOnlyXcel.args =  {
    name: 'files',
    multiple: true,
    accept: {
        'application/vnd.ms-excel': ['.xls'],
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    }
}

export const Error = Template.bind({})

Error.args =  {
    name: 'files',
    multiple: true,
    error: true,
    errorMessage: 'Ошибка, введены неверные данные'
}

