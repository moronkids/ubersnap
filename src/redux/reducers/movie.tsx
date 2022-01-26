/* eslint-disable import/no-anonymous-default-export */
import { GET_MOVIE } from 'redux/actions'
// Define your state here
const initialState = {
    list: Object
};
// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {

    switch (type) {
        case GET_MOVIE: {
            return {
                ...state,
                list: payload
            }
        }
        default:
            return state;
    }
};