import moment from "moment";
import * as Yup from "yup";

export const UpdateAccountSchema = Yup.object({
  name: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(3, "Must be at least 3 characters long")
    .required("Required"),
  phone: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(7, "Must be at least 7 characters long"),
  city: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(3, "Must be at least 3 characters long"),
  province: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(3, "Must be at least 3 characters long"),
  email: Yup.string().email().required("Required"),
});
