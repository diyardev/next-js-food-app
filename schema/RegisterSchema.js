import moment from "moment";
import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(3, "Must be at least 3 characters long")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required"),
});
