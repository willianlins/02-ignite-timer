import { Cycle } from "./reducer";

export enum ActonTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYLCE_AS_FINISHED = 'MARK_CURRENT_CYLCE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle){
  return {
    type: ActonTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function markCurrentCycleAsFinishedAction(){
  return {
    type: ActonTypes.MARK_CURRENT_CYLCE_AS_FINISHED,
  }
}

export function interruptedCurrentCycleAction(){
  return {
    type: ActonTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
