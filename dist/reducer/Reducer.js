import { ImagePinnerActionType } from '../action/ActionTypes';
export const initialState = {
    srcImg: '',
    zoom: 100,
    pins: []
};
export function Reducer(state, action) {
    switch (action.type) {
        case ImagePinnerActionType.INIT_ALL: {
            return Object.assign(Object.assign({}, state), { srcImg: action.payload.srcImg, pins: action.payload.data, zoom: action.payload.zoom });
        }
        case ImagePinnerActionType.ADD_PIN: {
            return Object.assign(Object.assign({}, state), { pins: action.payload });
        }
        case ImagePinnerActionType.EDIT_PIN: {
            return Object.assign(Object.assign({}, state), { pins: action.payload });
        }
        case ImagePinnerActionType.EDIT_COORDENATES: {
            return Object.assign(Object.assign({}, state), { pins: action.payload });
        }
        case ImagePinnerActionType.SAVE_PIN: {
            return Object.assign(Object.assign({}, state), { pins: action.payload });
        }
        case ImagePinnerActionType.REMOVE_PIN: {
            return Object.assign(Object.assign({}, state), { pins: action.payload });
        }
        case ImagePinnerActionType.EDIT_ZOOM: {
            return Object.assign(Object.assign({}, state), { zoom: action.payload });
        }
        default:
            return state;
    }
}
export default Reducer;
//# sourceMappingURL=Reducer.js.map