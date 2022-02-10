import { authAPI } from "../../api/auth";
import { setToken } from "../../helpers/auth";

export const signIn = (data: any) => async (dispatch: any) => {
  try {
    const user = await authAPI.login(data);
    setToken(user.token);
  } catch (e: any) {
    console.log(e);
  }
};
