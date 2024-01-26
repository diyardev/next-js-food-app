import { Button, Input, Select, SelectItem, Grid } from "@nextui-org/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BookSchema } from "../schema/BookSchema";
import moment from "moment";

const BookTable = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      date: moment().format("D.MM.YYYY"),
      time: "",
      person: "1",
    },
    validationSchema: BookSchema,
    onSubmit: (values) => {
    },
  });
  return (
    <div className="dark  text-foreground bg-background p-[2rem]  md:p-[5rem] w-full">
      <p className="font-dancing text-5xl p-2">Book A Table</p>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1 p-2">
          <div className="">
            <Input
              type="text"
              size="lg"
              label="Name"
              name="name"
              labelPlacement="outside"
              variant="bordered"
              onBlur={formik.handleBlur}
              errorMessage={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
              isInvalid={
                formik.touched.name && formik.errors.name ? true : false
              }
              onChange={formik.handleChange("name")}
              value={formik.values.name}
              color={formik.touched.name && formik.errors.name && "danger"}
              isRequired
            />
          </div>
          <div className="mt-10">
            <Input
              type="text"
              label="Phone Number"
              labelPlacement="outside"
              variant="bordered"
              size="lg"
              name="phone"
              onBlur={formik.handleBlur}
              errorMessage={
                formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : null
              }
              isInvalid={
                formik.touched.phone && formik.errors.phone ? true : false
              }
              color={formik.touched.phone && formik.errors.phone && "danger"}
              onChange={formik.handleChange("phone")}
              value={formik.values.phone}
              isRequired
            />
          </div>
          <div className="grid grid-cols-6 mt-5">
            <div className="py-2 col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3">
              <Input
                type="date"
                label="Date"
                variant="bordered"
                size="lg"
                onBlur={formik.handleBlur}
                errorMessage={
                  formik.touched.date && formik.errors.date
                    ? formik.errors.date
                    : null
                }
                isInvalid={
                  formik.touched.date && formik.errors.date ? true : false
                }
                color={formik.touched.date && formik.errors.date && "danger"}
                onChange={formik.handleChange("date")}
                value={formik.values.date}
                labelPlacement="outside-left"
                isRequired
              />
            </div>
            <div className="py-3 col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3">
              <Input
                type="time"
                label="Time"
                variant="bordered"
                size="lg"
                onBlur={formik.handleBlur}
                errorMessage={
                  formik.touched.time && formik.errors.time
                    ? formik.errors.time
                    : null
                }
                isInvalid={
                  formik.touched.time && formik.errors.time ? true : false
                }
                color={formik.touched.time && formik.errors.time && "danger"}
                labelPlacement="outside-left"
                onChange={formik.handleChange("time")}
                value={formik.values.time}
                isRequired
              />
            </div>

            <div className="py-3 col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
              <Select
                label="How many person?"
                labelPlacement="outside-left"
                variant="bordered"
                onChange={formik.handleChange("person")}
                value={formik.values.person}
                onBlur={formik.handleBlur}
                errorMessage={
                  formik.touched.person && formik.errors.person
                    ? formik.errors.person
                    : null
                }
                defaultSelectedKeys={"1"}
                isInvalid={
                  formik.touched.person && formik.errors.person ? true : false
                }
                color={
                  formik.touched.person && formik.errors.person && "danger"
                }
                isRequired
              >
                <SelectItem value="1" key="1">
                  1
                </SelectItem>
                <SelectItem value="2" key="2">
                  2
                </SelectItem>
                <SelectItem value="3" key="3">
                  3
                </SelectItem>
                <SelectItem value="4" key="4">
                  4
                </SelectItem>
                <SelectItem value="5" key="5">
                  5
                </SelectItem>
              </Select>
            </div>
          </div>

          <Button
            onPress={() => {
              formik.submitForm();
            }}
            color="default"
            size="lg"
            className="float-end mt-4 bg-primary font-bold border-none"
            variant="bordered"
          >
            Send
          </Button>
        </div>
        <div className="col-span-2 md:col-span-1 p-2">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885053183!2d28.84737262807287!3d41.00546324300305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1705279574659!5m2!1str!2str"
              frameBorder="0"
              width="100%"
              height="400px"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
