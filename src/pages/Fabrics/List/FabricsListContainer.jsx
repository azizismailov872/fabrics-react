import { isEmpty } from 'lodash';
import FabricsList from './FabricsList';
import { useMemo, useState } from 'react'
import useModal from '../../../hooks/useModal';
import useFilter from '../../../hooks/useFilter';
import { useQuery } from '@tanstack/react-query';
import useSorting from '../../../hooks/useSorting';
import useDelete from '../../../hooks/useDelete';
import { FabricsService } from '../../../services/FabricsService';
import useColumnsVisibility from '../../../hooks/useColumnsVisibility';
import {dataTableColumns, defaultSortingModel, 
        defaultVisibleColumns, filterFields, sortByOptions, 
        sortOptions, visibilityFormFields
} from '../data';

const getFilterVisibleValue = (searchParams) => {
    const params = Object.fromEntries(searchParams);
    const { page, ...filterParams } = params
    return !isEmpty(filterParams) ? true : false
}

const getShowResetSortValue = (sortModel, defaultSortModel) => {
    return JSON.stringify(sortModel) !== JSON.stringify(defaultSortModel) ? true : false
}

const FabricsListContainer = () => {
    const { register, onSubmit, reset, watch, searchParams, errors } = useFilter()

    const [isFilterVisible, setFilterVisible] = useState(getFilterVisibleValue(searchParams))

    const [modal, openModal, closeModal] = useModal();

    const [visibleColumns, hanldeVisibiltySubmit] = useColumnsVisibility(defaultVisibleColumns, 'fabricsVisibleColumns', closeModal)

    const [sortModel, handleSort, resetSort] = useSorting(defaultSortingModel, 'fabricsSorting', closeModal)

    const [selectedRows, setSelectedRows, onDelete] = useDelete(FabricsService.deleteFabrics, 'fabrics')

    const { data, isLoading } = useQuery({
        queryKey: ['fabrics', searchParams.toString(), JSON.stringify(sortModel)],
        queryFn: () => FabricsService.getFabricsList(searchParams.toString(), sortModel),
    })

    const showResetSort = useMemo(() => getShowResetSortValue(sortModel, defaultSortingModel), [sortModel])

    return (
        <FabricsList
            isFilterVisible={isFilterVisible}
            setFilterVisible={setFilterVisible}
            showResetSort={showResetSort}
            handleSort={handleSort}
            resetSort={resetSort}
            showDeleteBtn={selectedRows?.length > 0 ? true : false}
            deleteRowsCount={selectedRows?.length ? selectedRows.length : 0}
            onDelete={onDelete}
            modal={modal}
            openModal={openModal}
            closeModal={closeModal}
            filterFields={filterFields}
            register={register}
            onSubmit={onSubmit}
            reset={reset}
            watch={watch}
            errors={errors}
            data={data}
            visibleColumns={visibleColumns}
            setSelectedRows={setSelectedRows}
            dataTableColumns={dataTableColumns}
            visibilityFormFields={visibilityFormFields}
            hanldeVisibiltySubmit={hanldeVisibiltySubmit}
            sortByOptions={sortByOptions}
            sortOptions={sortOptions}
            sortModel={sortModel}
            defaultSortingModel={defaultSortingModel}
            isLoading={isLoading}
        />
    )
}

export default FabricsListContainer