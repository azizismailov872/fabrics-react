const Wrapper = (props) => {
    return (
        <div className="w-full h-full flex relative">
            {
                props.children
            }
        </div>
    )
}

export default Wrapper