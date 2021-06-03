/* eslint-disable complexity */
import { IComponentState } from '../store/IState';
import { ActionTypes, ImagePinnerActionType } from '../action/ActionTypes';

export const initialState: IComponentState = {
  srcImg: '',
  zoom: 100,
  pins: []
};

export function Reducer(
  state: IComponentState,
  action: ActionTypes
): IComponentState {
  switch (action.type) {
    case ImagePinnerActionType.INIT_ALL: {
      return {
        ...state,
        srcImg: action.payload.srcImg,
        pins: action.payload.data,
        zoom: action.payload.zoom
      };
    }
    case ImagePinnerActionType.ADD_PIN: {
      return { ...state, pins: action.payload };
    }
    case ImagePinnerActionType.EDIT_PIN: {
      return { ...state, pins: action.payload };
    }
    case ImagePinnerActionType.EDIT_COORDENATES: {
      return { ...state, pins: action.payload };
    }
    case ImagePinnerActionType.SAVE_PIN: {
      return { ...state, pins: action.payload };
    }
    case ImagePinnerActionType.REMOVE_PIN: {
      return { ...state, pins: action.payload };
    }
    case ImagePinnerActionType.EDIT_ZOOM: {
      return { ...state, zoom: action.payload };
    }
    default:
      return state;
  }
}

export default Reducer;
