import { call, all } from 'redux-saga/effects'
import newsSaga from './News/NewsSaga'

export default function* rootSaga() {
    yield all([
        yield call(newsSaga)
    ])
}
