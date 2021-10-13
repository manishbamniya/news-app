import { call, put, takeLatest } from 'redux-saga/effects';
import { getNewsAtHomepageSetDataAction } from './NewsActions';
import { GET_NEWS_AT_HOMEPAGE } from './NewsConstants';
import axios from 'axios'

const apiKey = '760423a9e7474914a78a0481a170bc82'

export default function* newsSaga() {
    yield takeLatest(GET_NEWS_AT_HOMEPAGE, getNewsSaga)
}

function* getNewsSaga() {
    // const requestURL = `https://newsapi.org/v2/everything?q=india&from=2021-10-12&sortBy=popularity`
    const requestURL = `https://newsapi.org/v2/top-headlines?country=in`
    
    try {
        const result = yield call(getHomepageNews, requestURL)
        yield put(getNewsAtHomepageSetDataAction(result))
    } catch (error) {
        console.log(error)
    }
}


const getHomepageNews = async (url) => {
    const response = await axios(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization':apiKey
          },
          
    })
    console.log(response)
    return response.data
}