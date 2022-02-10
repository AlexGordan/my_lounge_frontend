import { ActionType } from "../actions/app";

type ActionModel = {
  type: ActionType;
  payload: any;
};

interface IAuthInitialState {
  isAppInitialized: boolean;
}

const authInitialState = {
  isAppInitialized: false,
};

export const appReducer = (
  state: IAuthInitialState = authInitialState,
  action: ActionModel
) => {
  switch (action.type) {
    case ActionType.SET_INITIALIZED_SUCCESS: {
      return {
        ...state,
        isAppInitialized: true,
      };
    }
    default:
      return state;
  }
};
