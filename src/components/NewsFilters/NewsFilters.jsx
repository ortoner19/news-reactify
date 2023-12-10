import { useFetch } from '../helpers/hooks/useFetch';
import styles from './styles.module.css'
import { getCategories } from '../../api/apiNews';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';

const NewsFilters = ({ filters, changeFilter }) => {

    const { data: dataCategories } = useFetch(getCategories);

    return (
        <div className={styles.filters}>
            {dataCategories ? <Categories categories={dataCategories.categories} selectedCategory={filters.category} setSelectedCategory={(category) => changeFilter('category', category)} /> : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

        </div>
    )
}

export default NewsFilters;