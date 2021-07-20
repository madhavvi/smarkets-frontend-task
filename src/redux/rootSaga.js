import EventsSagas from './event/sagas/getEvents';
import EventByIDSagas from './event/sagas/getEventDetails';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...EventsSagas,
        ...EventByIDSagas
    ])
}