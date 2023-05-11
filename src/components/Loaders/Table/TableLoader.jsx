import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Row = () => {
    return (
        <div className="row flex gap-5 px-1 mb-5">
            <div className='w-[50px] h-[25px]'>
                <Skeleton height="100%" />
            </div>
            <div className="col-small basis-1/4 rounded-sm h-[25px]">
                <Skeleton height="100%" />
            </div>
            <div className="col-big basis-1/2 rounded-sm h-[25px]">
                <Skeleton height="100%" />
            </div>
            <div className="col-middle basis-1/3 rounded-sm h-[25px]">
                <Skeleton height="100%" />
            </div>
        </div>
       
    )
}

const TableLoader = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-between overflow-hidden'>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default TableLoader