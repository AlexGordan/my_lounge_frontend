import { getToken } from "../../helpers/auth";

export enum ActionType {
  SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS",
}

export const initializedSuccess = () => ({
  type: ActionType.SET_INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch: any, getState: any) => {
  const isToken = !!getToken();

  if (!isToken) {
    dispatch(initializedSuccess());
  } else {
    console.log("test");
    // const getProfileDataPromise = await dispatch(getUser());
    // Promise.any([getProfileDataPromise]).then((response) =>
    //   dispatch(initializedSuccess())
    // );
  }
};
