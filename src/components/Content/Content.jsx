const Content = (props) => {
  return (
    <div className='bg-white-100 dark:bg-primary-darkBlue w-full h-full'>
        {
            props.children
        }
    </div>
  )
}

export default Content