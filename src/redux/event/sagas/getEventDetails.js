import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../eventActions';
import * as api from '../../../services/Api';

function* getEventByID({payload}) {
    try {
        const result = yield call(api.getEventById, {
            id: `${payload.id}`
        });
        yield put(actions.getEventByIDSuccess({
			payload: result
		}));
    } catch (e) {
        yield put(actions.eventByIDError({
            error: 'An error occurred when trying to fetch event details.'
        }));
    }
}

function* watchGetEventsRequest() {
    yield takeEvery(actions.Types.GET_EVENT_BY_ID_REQUEST, getEventByID);
}

const EventByIDSagas = [
    fork(watchGetEventsRequest)
]

export default EventByIDSagas;
