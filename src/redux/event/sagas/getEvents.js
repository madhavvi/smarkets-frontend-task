import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../eventActions';
import * as api from '../../../services/Api';

function* getEvents() {
    try {
        const result = yield call(api.getEvents);
        yield put(actions.getEventsSuccess({
			items: result
		}));
    } catch (e) {
        yield put(actions.eventError({
            error: 'An error occurred when trying to fetch events'
        }));
    }
}

function* watchGetEventsRequest() {
    yield takeEvery(actions.Types.GET_EVENTS_REQUEST, getEvents);
}

const EventsSagas = [
    fork(watchGetEventsRequest)
]

export default EventsSagas;