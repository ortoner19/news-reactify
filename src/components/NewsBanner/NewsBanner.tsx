import { INews } from '../../interfaces';
import { formatTimeAgo } from '../helpers/formatTimeAgo';
import Image from '../Image/Image';
import styles from './styles.module.css'
// import withSkeleton from '../helpers/hocs/withSkeleton';


interface Props {
    item: INews;
}

const NewsBanner = ({ item }: Props) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

// const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)

// export default NewsBanner;
// export default NewsBannerWithSkeleton;
export default NewsBanner;