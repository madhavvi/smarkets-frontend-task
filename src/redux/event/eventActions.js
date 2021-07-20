export const Types = {
    GET_EVENTS_REQUEST: 'events/GET_EVENTS_REQUEST',
    GET_EVENTS_SUCCESS: 'events/GET_EVENTS_SUCCESS',
    EVENT_ERROR: 'events/EVENT_ERROR',
    GET_EVENT_BY_ID_REQUEST: 'events/GET_EVENT_BY_ID_REQUEST',
    GET_EVENT_BY_ID_SUCCESS: 'events/GET_EVENT_BY_ID_SUCCESS',
    EVENT_BY_ID_ERROR: 'events/EVENT_BY_ID_ERROR'
}

// Event List
export const getEvents = () => ({
    type: Types.GET_EVENTS_REQUEST
})

export const getEventsSuccess = ({items}) => ({
    type: Types.GET_EVENTS_SUCCESS,
    payload: {
        items: items
    }
})

export const eventError = ({error}) => ({
    type: Types.EVENT_ERROR,
    payload: {
        error
    }
});

//  Event detail by ID
export const getEventByID= (id) => ({
    type: Types.GET_EVENT_BY_ID_REQUEST,
    payload: {
        id
    }
})

export const getEventByIDSuccess = (payload) => ({
    type: Types.GET_EVENT_BY_ID_SUCCESS,
    payload
})

export const eventByIDError = ({error}) => ({
    type: Types.EVENT_BY_ID_ERROR,
    payload: {
        error
    }
});