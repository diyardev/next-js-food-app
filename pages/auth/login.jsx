import {
  Button,
  Input,
  Select,
  SelectItem,
  Grid,
  Link,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { LoginSchema } from "../../schema/LoginSchema";
import { EyeFilledIcon } from "../../components/ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/ui/icons/EyeSlashFilledIcon";
import { MailIcon } from "../../components/ui/icons/MailIcon";
import { PasswordIcon } from "../../components/ui/icons/PasswordIcon";
import GoogleIcon from "../../components/ui/icons/GoogleIcon";
import { useSession, signIn, getSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import bcrypt from "bcrypt";
import axios from "axios";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      const options = { redirect: false, email, password };

      const res = await signIn("credentials", options);
      if (res.ok) {
        push("/dashboard");
        toast.success("Login Successful!", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        const user = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/pull/${email}`
        );
        if (user.data && user.data.provider !== "local") {
          toast(`⚠️ Please login with ${user.data.provider}`, {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        } else {
          toast.error("Invalid Password", {
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      }
    },
  });

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="dark min-h-[85vh]  text-foreground bg-background p-[2rem]  md:p-[5rem] ">
      <Toaster />
      <p className="font-dancing  text-center text-5xl p-2">Login</p>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="min-w-[40vh]">
            <form className="flex flex-col gap-4">
              <Input
                size="lg"
                type="text"
                label="E-mail"
                name="email"
                placeholder="Enter your email"
                labelPlacement="outside"
                variant="bordered"
                onBlur={formik.handleBlur}
                startContent={
                  <MailIcon className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                errorMessage={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                isInvalid={
                  formik.touched.email && formik.errors.email ? true : false
                }
                onChange={formik.handleChange("email")}
                value={formik.values.email}
                color={formik.touched.email && formik.errors.email && "danger"}
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
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" href="/auth/register">
                  Sign up
                </Link>
              </p>
              <div>
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

                <Button
                  onPress={() => signIn("google")}
                  className="mt-10 w-full bg-content1"
                  size="lg"
                  variant="bordered"
                  startContent={<GoogleIcon className="min-w-8" />}
                >
                  Sign with Google
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/pull/${session.user.email}`
    );
    if (!user.data) {
      const salt = await bcrypt.genSalt(8);
      const newPass = session.user.email + Date.now();
      var password = await bcrypt.hash(newPass, salt);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        {
          email: session.user.email,
          name: session.user.name,
          provider: "google",
          password: password,
          image: session.user.image,
        }
      );
    }

    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Login;
