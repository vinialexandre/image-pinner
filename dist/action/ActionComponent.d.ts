/// <reference types="styled-jsx" />
import { ActionTypes } from './ActionTypes';
import { IDefaultProps } from '../properties/IProperties';
import { Dispatch } from 'react';
import { IPin } from '../store/IState';
export declare const actionInitAll: (defaultProps: IDefaultProps, svgRef: import("react").RefObject<SVGSVGElement>) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
export declare const actionAddPin: (pin: IPin, pinsState: IPin[]) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
export declare const actionRemovePin: (pin: IPin, pinsState: IPin[]) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
export declare const actionEditPin: (newPin: IPin, oldPin: IPin | undefined, pinsState: IPin[]) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
export declare const actionEditCoordinatesPin: (pin: IPin) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
export declare const actionEditZoom: (zoom: number) => (dispatch: Dispatch<ActionTypes>) => Promise<void>;
//# sourceMappingURL=ActionComponent.d.ts.map