var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImagePinnerActionType } from './ActionTypes';
import { createPinDrag } from '../helpers/utils';
import { useSelector } from '../store/Provider';
export const actionInitAll = (defaultProps, svgRef) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        let loadInputs = Object.assign({}, defaultProps);
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
    });
};
export const actionAddPin = (pin, pinsState) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const pins = [...pinsState, pin];
        dispatch({
            type: ImagePinnerActionType.ADD_PIN,
            payload: pins
        });
    });
};
export const actionRemovePin = (pin, pinsState) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const newPins = pinsState.filter(el => el.id !== pin.id);
        dispatch({
            type: ImagePinnerActionType.REMOVE_PIN,
            payload: newPins
        });
    });
};
export const actionEditPin = (newPin, oldPin, pinsState) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        if (oldPin) {
            oldPin.description = newPin.description;
            oldPin.order = newPin.order;
            const newPins = pinsState.filter(el => el.id !== oldPin.id);
            newPins.push(oldPin);
            dispatch({
                type: ImagePinnerActionType.EDIT_PIN,
                payload: newPins
            });
        }
    });
};
export const actionEditCoordinatesPin = (pin) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        let pinsState = useSelector(state => state.pins);
        const newPins = pinsState.filter(el => el.id !== pin.id);
        newPins.push(pin);
        dispatch({
            type: ImagePinnerActionType.EDIT_COORDENATES,
            payload: newPins
        });
    });
};
export const actionEditZoom = (zoom) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch({
            type: ImagePinnerActionType.EDIT_ZOOM,
            payload: zoom
        });
    });
};
//# sourceMappingURL=ActionComponent.js.map