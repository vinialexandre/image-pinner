import React, { Dispatch } from 'react';
import { ActionTypes } from '../action/ActionTypes';
import { IComponentState } from './IState';
interface ICreateReducer {
    children: JSX.Element;
}
export declare type IDispatcher = (dispatch: Dispatch<ActionTypes>, state: IComponentState) => void;
export declare const StateContext: React.Context<any>;
export declare const Provider: ({ children }: ICreateReducer) => JSX.Element;
export declare const useStateValue: () => any;
export declare function useSelector<T>(selector: (state: IComponentState) => T): T;
export declare function useDispatch(): (action: any) => void;
export {};
//# sourceMappingURL=Provider.d.ts.map