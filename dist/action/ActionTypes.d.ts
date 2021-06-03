import { IPin } from '../store/IState';
import { IDefaultProps } from '../properties/IProperties';
export declare enum ImagePinnerActionType {
    INIT_ALL = "INIT_ALL",
    ADD_PIN = "ADD_PIN",
    EDIT_PIN = "EDIT_PIN",
    EDIT_COORDENATES = "EDIT_COORDENATES",
    REMOVE_PIN = "REMOVE_PIN",
    EDIT_ZOOM = "EDIT_ZOOM",
    SAVE_PIN = "SAVE_PIN"
}
export interface IInitAll {
    type: ImagePinnerActionType.INIT_ALL;
    payload: IDefaultProps;
}
export interface IAddPin {
    type: ImagePinnerActionType.ADD_PIN;
    payload: IPin[];
}
export interface IEditPin {
    type: ImagePinnerActionType.EDIT_PIN;
    payload: IPin[];
}
export interface IEditCoordenates {
    type: ImagePinnerActionType.EDIT_COORDENATES;
    payload: IPin[];
}
export interface IRemovePin {
    type: ImagePinnerActionType.REMOVE_PIN;
    payload: IPin[];
}
export interface IEditZoom {
    type: ImagePinnerActionType.EDIT_ZOOM;
    payload: number;
}
export interface ISavePin {
    type: ImagePinnerActionType.SAVE_PIN;
    payload: IPin[];
}
export declare type ActionTypes = IInitAll | IAddPin | IEditPin | IEditCoordenates | IRemovePin | ISavePin | IEditZoom;
//# sourceMappingURL=ActionTypes.d.ts.map