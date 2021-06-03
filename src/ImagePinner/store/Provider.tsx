/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import { ActionTypes } from '../action/ActionTypes';
import { IComponentState } from './IState';
import Reducer, { initialState } from '../reducer/Reducer';

interface ICreateReducer {
  children: JSX.Element;
}

export type IDispatcher = (
  dispatch: Dispatch<ActionTypes>,
  state: IComponentState
) => void;

export const StateContext = createContext<IComponentState | any>({});

export const Provider = ({ children }: ICreateReducer): JSX.Element => {
  return (
    <StateContext.Provider value={useReducer(Reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

export function useSelector<T>(selector: (state: IComponentState) => T): T {
  const [state] = useStateValue();
  return selector(state);
}

export function useDispatch() {
  const [state, dispatch]: [
    IComponentState,
    Dispatch<ActionTypes>
  ] = useStateValue();

  function autoReDispatch(action: any) {
    typeof action === 'function' ? action(dispatch, state) : dispatch(action);
  }

  return autoReDispatch;
}
