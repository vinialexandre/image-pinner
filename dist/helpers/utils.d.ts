/// <reference types="react" />
import { IPin } from '../store/IState';
declare type Reference<T> = React.RefObject<T>;
export declare const createPinDrag: (ref: Reference<SVGSVGElement>, pins: IPin[], newData: IPin, save: void) => IPin;
export declare const updateOrderPinDrag: (newData: IPin, pins: IPin[]) => void;
export declare function matchOrder(pin: IPin, pins: IPin[]): number;
export declare function repositionTextPin(pin: IPin): string;
export {};
//# sourceMappingURL=utils.d.ts.map