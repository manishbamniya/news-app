import { combineReducers } from "redux"
import newsReducers from "./News/NewsReducers"

const rootReducer = combineReducers({
    news: newsReducers
});

export default rootReducer;