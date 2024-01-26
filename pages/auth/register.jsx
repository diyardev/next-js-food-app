import { Button, Input, Link } from "@nextui-org/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterSchema } from "../../schema/RegisterSchema";
import { EyeFilledIcon } from "../../components/ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/ui/icons/EyeSlashFilledIcon";
import { MailIcon } from "../../components/ui/icons/MailIcon";
import { PasswordIcon } from "../../components/ui/icons/PasswordIcon";
import { UserIcon } from "../../components/ui/icons/UserIcon";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import GoogleIcon from "../../components/ui/icons/GoogleIcon";
import { getSession, signIn, useSession } from "next-auth/react";
import bcrypt from "bcrypt";

const Register = () => {
  const { data: session } = useSession();

  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
          values
        );
        toast.success("Registration Successful!", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        push("/dashboard");
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log(error);
      }
    },
  });

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="dark min-h-[85vh]  text-foreground bg-background p-[2rem]  md:p-[5rem] ">
      <Toaster />
      <p className="font-dancing  text-center text-5xl p-2">Register</p>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="min-w-[40vh]">
            <form className="flex flex-col gap-4">
              <Input
                size="lg"
                type="text"
                label="Name"
                name="name"
                placeholder="Enter your name"
                labelPlacement="outside"
                variant="bordered"
                onBlur={formik.handleBlur}
                startContent={
                  <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
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
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
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
                Already have an account?{" "}
                <Link size="sm" href="/auth/login">
                  Login
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  onClick={() => {
                    formik.submitForm();
                  }}
                  fullWidth
                  color="primary"
                  variant="shadow"
                  className=" text-black text-lg"
                >
                  Register
                </Button>
              </div>
              <Button
                onPress={() => signIn("google")}
                className="mt-4 w-full bg-content1"
                size="lg"
                variant="bordered"
                startContent={<GoogleIcon className="min-w-8" />}
              >
                Sign with Google
              </Button>
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

export default Register;
