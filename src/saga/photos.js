import {put, takeEvery, call} from "redux-saga/effects"
import { setPhoto, FETCH_PHOTOS } from "../store/photoReducer";

const fetchPhotosAPI = () => fetch('https://jsonplaceholder.typicode.com/photos?_limit=24')

function* fetchPhotosWorker(){
    const data = yield call(fetchPhotosAPI);
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setPhoto(json))
}

export function* photoWatcher(){
    yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}