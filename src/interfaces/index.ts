export interface INews {
    author: string;
    category: CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'

export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string;
}

export interface IPaginationProps {
    totalPages: number, 
    handlePreviousPage: () => void, 
    handleNextPage: () => void, 
    handlePageClick: (page: number) => void, 
    currentPage: number,
}

// interface IBanner  {
//  bannerID: string;
//  [key: string]: string | number | null;
// }

// const banner: IBanner = {
//     bannerID: "1",
// }

// const news = {
//     author: "Ruslan",
//     category: ["all"],
//     description: "Typescript",
//     id: 1,
//     image: null,
//     language: "ru",
//     published: "yes",
//     title: "TS",
//     url: "",
// }

// type NewsType = typeof news;

// export interface IBanner {
//     description: string;
//     id: NewsId;
//     image: string;
//     title: string;
//     url: UrlType;
//     date: Date;
//     rate: number;
// }

// export type ItemType = INews & IBanner;

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilters> // тіпа всі полі не обязательні тепер

export type CategoryType = string;
// type UrlType = string | null | undefined;
// type NewsId = string;