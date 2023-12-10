import styles from './styles.module.css'
import Pagination from '../Pagination/Pagination';
import NewsList from '../NewsList/NewsList';
import { TOTAL_PAGES } from '../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';



const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {


    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        changeFilter('page_Number', pageNumber)
    }

    return (
        <section className={styles.section}>

            <NewsFilters filters={filters} changeFilter={changeFilter} />

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={TOTAL_PAGES} currentPage={filters.page_number} />

            <NewsList isLoading={isLoading} news={news} />

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={TOTAL_PAGES} currentPage={filters.page_number} />
        </section>
    )
}

export default NewsByFilters;