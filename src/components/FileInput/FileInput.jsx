import {useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { CloudArrowUp, FileXls } from '@phosphor-icons/react'
import '../../index.css'


const FileInput = (props) => {
    const { name,multiple,watch,register,setValue,setError,unregister,error,errorMessage} = props

    const files = watch(name)

    const onDrop = (acceptedFiles) => {
        switch(multiple){
            case true: 
                (files?.length > 0 && files?.length <    3)? setValue(name,[...files,...acceptedFiles]) : setValue(name,acceptedFiles)
                return
            case false: 
                setValue(name,acceptedFiles)
                return 
        }
    }

    const {acceptedFiles,fileRejections,getRootProps, getInputProps, isDragActive } = useDropzone({
        maxFiles:3,
        onDrop: acceptedFiles => onDrop(acceptedFiles),
        onDropRejected: (error => {
            if(error?.length) {
                if(error[0].errors[0].code == 'file-invalid-type') {
                    setError(name,{
                        message: 'Недопустимый тип файла'
                    })
                }
            }
        }),
        accept: props.accept,
    })

    useEffect(() => {
        register(name)
        return () => {
            unregister(name)
        }
    }, [register, unregister, name])


    return (
        <>
            <Paper className={`${error && 'border border-red-600'} shadow-xl px-4 dark:bg-gray-600 py-5 flex flex-col justify-center items-center`} {...getRootProps()}>
                <CloudArrowUp className={`${error && 'text-red-600'}`}  size={55} weight="light" />
                <input {...getInputProps()} {...register(name)} />
                <p className={`text-center ${error && 'text-red-600'}`}>Нажмите или перетащите файлы</p>
            </Paper>
            <p className='mt-2 text-red-600'>{(error && errorMessage) && errorMessage}</p>
            {!!files?.length && (
                <List className='w-full'>
                    <div className='flex md:flex-row flex-col gap-2 mt-2 w-full'>
                        {files.map((file) => (
                            <ListItem className='shadow-lg bg-white rounded-md mb-3 w-full' key={file.name}>
                                <ListItemIcon>
                                    <FileXls size={18} />
                                </ListItemIcon>
                                <ListItemText primary={file.name} secondary={file.size} />
                            </ListItem>
                        ))}
                    </div>    
                </List>
            )}
        </>
    )
}


export default FileInput