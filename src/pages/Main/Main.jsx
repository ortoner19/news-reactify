import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
// import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../components/helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../components/constants/constants';
import { useFetch } from '../../components/helpers/hooks/useFetch';
import { useFilters } from '../../components/helpers/hooks/useFilters';

const Main = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    // const [news, setNews] = useState([])
    // const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    // const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    // const totalPages = 10;
    // const pageSize = 10;
    const [keywords, setKeywords] = useState('')

    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    // const { data, error, isLoading } = useFetch(getNews, {
    const { data, isLoading } = useFetch(getNews, {
        // page_number: currentPage,
        // page_size: PAGE_SIZE,
        // category: selectedCategory === "All" ? null : selectedCategory,
        ...filters,
        keywords: debouncedKeywords,
    })

    const { data: dataCategories } = useFetch(getCategories, {

    })



    // const fetchNews = async (currentPage) => {
    // try {
    //     setIsLoading(true);
    //     const response = await getNews({
    //         page_number: currentPage,
    //         page_size: PAGE_SIZE,
    //         category: selectedCategory === "All" ? null : selectedCategory,
    //         keywords: debouncedKeywords,
    //     });
    //     // console.log(news);
    //     setNews(response.news);
    //     setIsLoading(false)
    // }
    // catch (error) {
    //     console.log(error);
    // }
    // };

    // const fetchCategories = async () => {
    //     try {
    //         const response = await getCategories();
    //         setCategories(["All", ...response.categories]);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // };
    // console.log(categories);


    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    // useEffect(() => {
    //     fetchNews(currentPage);
    // }, [currentPage, selectedCategory, debouncedKeywords])

  


    const handleNextPage = () => {
        // if (currentPage < TOTAL_PAGES) {
        if (filters.page_number < TOTAL_PAGES) {
            // setCurrentPage(currentPage + 1)
            // setCurrentPage(filters.page_number + 1)
            changeFilter('page_number', filters.page_number + 1)
        }
    }
    const handlePreviousPage = () => {
        // if (currentPage > 1) {
        //     setCurrentPage(currentPage - 1)
        if (filters.page_number > 1) {
            // setCurrentPage(filters.page_number - 1)
            changeFilter('page_number', filters.page_number - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        // setCurrentPage(pageNumber);
        changeFilter('page_Number', pageNumber)
    }

    // console.log(keywords);

    return (
        <main className={styles.main}>
            {dataCategories ? <Categories categories={dataCategories.categories} selectedCategory={filters.category} setSelectedCategory={(category) => changeFilter('category', category)} /> : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

            {/* {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type={'banner'} count={1} />} */}
            <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} />


            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={TOTAL_PAGES} currentPage={filters.page_number} />

            {/* {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />} */}
            <NewsList isLoading={isLoading} news={data?.news} />

            <Pagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} totalPages={TOTAL_PAGES} currentPage={filters.page_number} />
        </main>
    )
}

export default Main;