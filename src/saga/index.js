import {photoWatcher} from "./photos";

export function* rootWatcher(){
    yield [photoWatcher]
}