/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducer/Reducer';
export const StateContext = createContext({});
export const Provider = ({ children }) => {
    return (React.createElement(StateContext.Provider, { value: useReducer(Reducer, initialState) }, children));
};
export const useStateValue = () => useContext(StateContext);
export function useSelector(selector) {
    const [state] = useStateValue();
    return selector(state);
}
export function useDispatch() {
    const [state, dispatch] = useStateValue();
    function autoReDispatch(action) {
        typeof action === 'function' ? action(dispatch, state) : dispatch(action);
    }
    return autoReDispatch;
}
//# sourceMappingURL=Provider.js.map