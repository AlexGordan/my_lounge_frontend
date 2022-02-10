import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup.string().email("Invalid data").required("This field is required"),
  password: yup.string().required("This field is required"),
});
