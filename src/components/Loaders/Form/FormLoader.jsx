import React from 'react'
import Skeleton from 'react-loading-skeleton'


const Row = ({reverse}) => {
    return reverse ?  (
        <div className="row flex gap-3 px-1 mb-5">
            <div className='basis-1/2 h-[30px]'>
                <Skeleton height="100%" />
            </div>
            <div className="col-small basis-1/3 rounded-sm h-[30px]">
                <Skeleton height="100%" />
            </div>
            <div className="col-big basis-1/2 rounded-sm h-[30px]">
                <Skeleton height="100%" />
            </div>
        </div>

    ) : (
        <div className="row flex gap-3 px-1 mb-5">
            <div className='basis-1/2 h-[30px]'>
                <Skeleton height="100%" />
            </div>
            <div className="col-small basis-1/3 rounded-sm h-[30px]">
                <Skeleton height="100%" />
            </div>
            <div className="col-big basis-1/3 rounded-sm h-[30px]">
                <Skeleton height="100%" />
            </div>
        </div>
    )
}

const FormLoader = () => {
    return (
        <div>
            <Row/>
            <Row reverse/>
            <div className='mt-4 flex gap-3'>
                <div className='w-36 h-7 rounded-md'>
                    <Skeleton height="100%" />
                </div>
                <div className='w-36 h-7 rounded-md'>
                    <Skeleton height="100%" />
                </div>
            </div>
        </div>
    )
}

export default FormLoader