import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";
import { photoWatcher } from "../saga/photos";
import photoReducer from "./photoReducer";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(photoReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(photoWatcher)