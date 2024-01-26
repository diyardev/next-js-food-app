import moment from "moment";
import * as Yup from "yup";

export const BookSchema = Yup.object({
  name: Yup.string()
    .max(50, "Must be 50 characters or less")
    .min(3, "Must be at least 3 characters long")
    .required("Required"),
  phone: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(3, "Must be at least 3 characters long")
    .required("Required"),
  date: Yup.date()
    .min(moment(), "Tarih bugünden eski olamaz")
    .required("Required"),
  time: Yup.string().required("Required"),
});
