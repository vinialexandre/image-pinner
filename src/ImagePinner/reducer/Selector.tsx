import { ISaveData } from '../properties/IProperties';
import { IComponentState } from '../store/IState';

export function selectorSaveData(state: IComponentState): ISaveData {
  return {
    zoom: state.zoom,
    data: state.pins
  };
}
