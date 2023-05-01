import useLocalStorage from "./useLocalstorage";

const useSorting = (defaultSortingModel,key,onSubmit) => {
    const [sortModel,setSortModel] = useLocalStorage(defaultSortingModel,key);

    const handleSort = (data) => {
        setSortModel({
            ...data
        });
        onSubmit && onSubmit()
    }

    const resetSort = () => {
        setSortModel({
            ...defaultSortingModel
        })
    }

    return [sortModel,handleSort,resetSort];
}

export default useSorting