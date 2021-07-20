import { Types } from './eventActions';

const INITIAL_STATE = {
    items: [],
    item: {}
};

export default function events(state = INITIAL_STATE, action){
    switch(action.type){
         // to get event list
        case Types.GET_EVENTS_SUCCESS: {
            return {
                ...state,
                list: action.payload
            }
        }

        case Types.EVENT_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        // to get event by ID
        case Types.GET_EVENT_BY_ID_SUCCESS: {
            return {
                ...state,
                item: action.payload.payload.data
            }
        }
        case Types.EVENT_BY_ID_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        default: {
            return state;
        }
    }
}