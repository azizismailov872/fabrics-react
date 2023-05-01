import useLocalStorage from "./useLocalstorage";

const useColumnsVisibility = (defaultVisibleColumns,key,onSubmit) => {
    const [visibleColumns,setVisibleColumns] = useLocalStorage(defaultVisibleColumns,key);

    const hanldeVisibiltySubmit = (data) => {
        setVisibleColumns({
            ...data
        });
        onSubmit && onSubmit()
    }

    return [visibleColumns,hanldeVisibiltySubmit];
}

export default useColumnsVisibility;