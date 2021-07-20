import axios from 'axios';

export const getEvents = () => {
    return axios.get('', {});
}

export const getEventById = (payload) => {
  return axios.get(''+ payload.id, {});
}
