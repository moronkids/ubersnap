// /* eslint-disable @typescript-eslint/no-unused-vars */

import { put, call, takeEvery, SagaReturnType } from "redux-saga/effects";

// Import all actions
import {
    GET_MOVIE,
    HIT_MOVIE
} from "redux/actions";
// Import all actions

//Import api call
import {
    getMovies
} from "redux/api/movie";
//Import api call

type MovieResponse = SagaReturnType<typeof getMovies>
function* hitMovie({ payload }: any) {
    try {
        const movie_: MovieResponse = yield call(getMovies, payload);
        yield put({ type: GET_MOVIE, payload: movie_ });
    } catch (error) {
    }
}



export default function* scora() {

    yield takeEvery(HIT_MOVIE, hitMovie);

}