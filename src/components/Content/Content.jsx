const Content = (props) => {
  return (
    <div className='bg-white-100 dark:bg-primary-darkBlue content'>
        {
            props.children
        }
    </div>
  )
}

export default Content