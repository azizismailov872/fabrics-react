import { Warning } from "@phosphor-icons/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { toast } from "react-hot-toast"


const useDelete = (deleteFunction,updateClient) => {
    const [selectedRows,setSelectedRows] = useState([])

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: deleteFunction
    })

    const actionDelete = async() => {
        const loadingTost = toast.loading('Удаление...')
        mutation.mutate(selectedRows,{
            onError: (error, variables, context) => {
                toast.error('Ошибка при удалении данных',{
                    id: loadingTost
                });
                if (error.response.data?.errors) {
                    setErrors(error.response.data.errors, setError)
                }
            },
            onSuccess: (data, variables, context) => {
                const message = data.data.message ? data.data.message : 'Данные успешно удалены'
                queryClient.invalidateQueries(updateClient)
                toast.success(message, {
                    id: loadingTost,
                });
                setSelectedRows([])
            },
        })
    }

    const onDelete = () => {
        toast((t) => (
            <div className='w-full max-w-lg flex gap-3 items-center'>
                <span><Warning className='text-red-600' size={22} weight="light" /></span>
                <span>Вы уверены что хотите удалить выбранные модели ?</span>
                <button className='py-1 px-2 bg-red-600 text-primary-light rounded-md' onClick={() => {
                    toast.dismiss(t.id)
                    actionDelete()
                }}>
                    Удалить
                </button>
            </div>
        ),{
            style: {
                maxWidth: '430px',
            }
        });
    }

    return [selectedRows,setSelectedRows,onDelete]
}

export default useDelete