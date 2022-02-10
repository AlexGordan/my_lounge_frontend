import instance from ".";
import { apiConfig } from "../config/config";

export const authAPI = {
  login: (data: any) => {
    return instance.post(`${apiConfig}/auth/signin`, data).then(({ data }) => data);
  },
};
