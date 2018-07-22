import { LOG_IN , LOG_OUT} from '../constants/ActionTypes';

const initialState = [{
    text: 'Redux',
}];

export default function userReduces(state = null, action) {
    switch (action.type) {
        case LOG_IN:
            return action.username;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}