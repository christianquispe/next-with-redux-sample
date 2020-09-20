export interface IInitialStateAction {
  type: string;
  payload: IInitialState;
}

export interface IInitialState {
  tick: string;
}

const initialState: IInitialState = {
  tick: "Christian",
};

export enum ETypes {
  LOAD_FIRST = "LOAD_FIRST",
  CHANGE_STATE = "CHANGE_STATE",
}

export const reducer = (
  state = initialState,
  action: IInitialStateAction
): IInitialState => {
  switch (action.type) {
    case ETypes.LOAD_FIRST:
      return { ...state, ...action.payload };
    case ETypes.CHANGE_STATE:
      return { ...state, tick: action.payload.tick };
    default:
      return state;
  }
};
