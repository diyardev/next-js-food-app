import moment from "moment";
import * as Yup from "yup";

export const AdminLoginSchema = Yup.object({
  username: Yup.string()
    .required("Required"),
  password: Yup.string()
    .required("Required")
});
