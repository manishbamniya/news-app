import produce from 'immer';
import { GET_NEWS_AT_HOMEPAGE, GET_NEWS_AT_HOMEPAGE_SET_DATA } from "./NewsConstants";

export const initialState = {
    getNewsHomepageState: { data: {}, isLoading: false, error: '' }
}

const newsReducers = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
            case GET_NEWS_AT_HOMEPAGE:
                draft.getNewsHomepageState = {
                    ...draft.getNewsHomepageState,
                    isLoading: true, message: '', error: ''
                }
                break;
            case GET_NEWS_AT_HOMEPAGE_SET_DATA:
                draft.getNewsHomepageState = {
                    ...draft.getNewsHomepageState,
                    ...action.data, isLoading: false
                }
                break;
            default:
                return {
                    ...state
                }
        }
    })

export default newsReducers;