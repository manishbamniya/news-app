import { GET_NEWS_AT_HOMEPAGE,GET_NEWS_AT_HOMEPAGE_SET_DATA } from "./NewsConstants";

export const getNewsAtHomepageAction = (data) => {
    return{
        type :  GET_NEWS_AT_HOMEPAGE,
    }
}

export const getNewsAtHomepageSetDataAction = (data) => {
    return{
        type :  GET_NEWS_AT_HOMEPAGE_SET_DATA,
        data:data
    }
}