/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImagePinnerActionType, ActionTypes } from './ActionTypes';
import { IDefaultProps } from '../properties/IProperties';
import { Dispatch } from 'react';
import { IPin } from '../store/IState';
import { createPinDrag } from '../helpers/utils';
import { useSelector } from '../store/Provider';

export const actionInitAll = (
  defaultProps: IDefaultProps,
  svgRef: React.RefObject<SVGSVGElement>
) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    let loadInputs: IDefaultProps = { ...defaultProps };
    if (defaultProps.data.length) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      loadInputs.data = defaultProps.data.map(el => {
        const newpin = createPinDrag(svgRef, defaultProps.data, el);
        return newpin;
      });
    }
    dispatch({
      type: ImagePinnerActionType.INIT_ALL,
      payload: loadInputs
    });
  };
};

export const actionAddPin = (pin: IPin, pinsState: IPin[]) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    const pins = [...pinsState, pin];
    dispatch({
      type: ImagePinnerActionType.ADD_PIN,
      payload: pins
    });
  };
};

export const actionRemovePin = (pin: IPin, pinsState: IPin[]) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    const newPins: IPin[] = pinsState.filter(el => el.id !== pin.id);
    dispatch({
      type: ImagePinnerActionType.REMOVE_PIN,
      payload: newPins
    });
  };
};

export const actionEditPin = (
  newPin: IPin,
  oldPin: IPin | undefined,
  pinsState: IPin[]
) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    if (oldPin) {
      oldPin.description = newPin.description;
      oldPin.order = newPin.order;

      const newPins: IPin[] = pinsState.filter(el => el.id !== oldPin.id);
      newPins.push(oldPin);
      dispatch({
        type: ImagePinnerActionType.EDIT_PIN,
        payload: newPins
      });
    }
  };
};

export const actionEditCoordinatesPin = (pin: IPin) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    let pinsState = useSelector(state => state.pins);
    const newPins: IPin[] = pinsState.filter(el => el.id !== pin.id);
    newPins.push(pin);
    dispatch({
      type: ImagePinnerActionType.EDIT_COORDENATES,
      payload: newPins
    });
  };
};

export const actionEditZoom = (zoom: number) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({
      type: ImagePinnerActionType.EDIT_ZOOM,
      payload: zoom
    });
  };
};
