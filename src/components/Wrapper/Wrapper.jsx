const Wrapper = (props) => {
    return (
        <div className="flex relative wrapper">
            {
                props.children
            }
        </div>
    )
}

export default Wrapper