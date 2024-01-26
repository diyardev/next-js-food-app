import moment from "moment";
import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email()
    .required("Required"),
  password: Yup.string()
    .required("Required")
});
