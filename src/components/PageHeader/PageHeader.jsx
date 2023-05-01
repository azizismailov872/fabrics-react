import React from 'react'

const PageHeader = ({title}) => {
  return (
    <h1 className='text-3xl font-semibold text-black-100 dark:text-primary-light mb-4'>{title}</h1>
  )
}

export default PageHeader