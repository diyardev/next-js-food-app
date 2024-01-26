import {
  Button,
  Input,
  Select,
  SelectItem,
  Grid,
  Link,
} from "@nextui-org/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { AdminLoginSchema } from "../../schema/AdminLoginSchema";
import { EyeFilledIcon } from "../../components/ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/ui/icons/EyeSlashFilledIcon";
import { MailIcon } from "../../components/ui/icons/MailIcon";
import { PasswordIcon } from "../../components/ui/icons/PasswordIcon";
import { UserIcon } from "../../components/ui/icons/UserIcon";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

const Login = () => {
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: AdminLoginSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin`,
          values
        );
        push("/admin");
        toast.success(res.data.message, {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    },
  });

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="dark min-h-[85vh]  text-foreground bg-background p-[2rem]  md:p-[5rem] ">
      <Toaster />
      <p className="font-dancing  text-center text-5xl p-2">Admin Login</p>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="min-w-[40vh]">
            <form className="flex flex-col gap-4">
              <Input
                size="lg"
                type="text"
                label="Username"
                name="username"
                placeholder="Enter your username"
                labelPlacement="outside"
                variant="bordered"
                onBlur={formik.handleBlur}
                startContent={
                  <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                errorMessage={
                  formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : null
                }
                isInvalid={
                  formik.touched.username && formik.errors.username
                    ? true
                    : false
                }
                onChange={formik.handleChange("username")}
                value={formik.values.username}
                color={
                  formik.touched.username && formik.errors.username && "danger"
                }
                isRequired
              />
              <Input
                size="lg"
                name="password"
                label="Password"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                startContent={
                  <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type={isVisible ? "text" : "password"}
                onBlur={formik.handleBlur}
                errorMessage={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
                isInvalid={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                onChange={formik.handleChange("password")}
                value={formik.values.password}
                color={
                  formik.touched.password && formik.errors.password && "danger"
                }
                isRequired
              />

              <div className="flex gap-2 justify-end">
                <Button
                  onPress={() => {
                    formik.submitForm();
                  }}
                  fullWidth
                  color="primary"
                  variant="shadow"
                  className=" text-black text-lg"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: { 
        destination: "/admin/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
