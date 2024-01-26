import {
  Button,
  Input,
  Select,
  SelectItem,
  Grid,
  Link,
  ButtonGroup,
  Divider,
  Textarea,
  User,
} from "@nextui-org/react";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { UpdateAccountSchema } from "../../schema/UpdateAccountSchema";
import axios from "axios";
import { UserIcon } from "../../components/ui/icons/UserIcon";
import { MailIcon } from "../../components/ui/icons/MailIcon";
import PhoneIcon from "../../components/ui/icons/PhoneIcon";
import CityIcon from "../../components/ui/icons/CityIcon";
import ProvinceIcon from "../../components/ui/icons/ProvinceIcon";
import MapIcon from "../../components/ui/icons/MapIcon";
import SaveIcon from "../../components/ui/icons/SaveIcon";
import { EyeFilledIcon } from "../../components/ui/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/ui/icons/EyeSlashFilledIcon";
import { PasswordIcon } from "../../components/ui/icons/PasswordIcon";

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/pull/${session.user.email}`
  );

  return {
    props: {
      user: user ? user.data : null,
    },
  };
}

const Dashboard = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOut({
        redirect: false,
      });
      push("/auth/login");
      toast.success("Logout Successful!", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { data: session } = useSession();
  const { push } = useRouter();
  const [activeTab, setActiveTab] = useState("account");
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

  const updatePassword = async () => {
    if (password.length < 5) {
      return toast.error("Password must be at least 5 characters long", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    if (password === passwordConfirmed) {
      try {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          { password: password, provider: "local" }
        );
        toast.success("Update Successful!", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } catch (error) {
        toast.error(error?.response?.data?.message, {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log(error);
      }
    } else {
      toast.error("Password not confirmed", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      city: user?.city,
      province: user?.province,
      address: user?.address,
    },
    validationSchema: UpdateAccountSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
          values
        );
        toast.success("Update Successful!", {
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
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

  return (
    <div className="dark min-h-[85vh]  text-foreground bg-background p-[1rem]  md:p-[5rem] ">
      <Toaster />
      <p className="font-dancing  text-center text-5xl p-2">Profile</p>

      <div className="container mx-auto">
        <div className="flex flex-col min-w-[40vh] pt-5 items-center justify-center p-2">
          <User
            name={user?.name}
            description={user?.email}
            classNames={{
              base: "mb-10 bg-content1 p-4",
              name: "text-2xl",
              description: "text-md",
            }}
            avatarProps={{
              src: user.image
                ? user.image
                : "https://nextui.org/avatars/avatar-6.png",
              size: "lg",
            }}
          />

          <ButtonGroup className="">
            <Button
              color="default"
              onClick={() => setActiveTab("account")}
              variant={activeTab == "account" ? "faded" : "flat"}
            >
              My Account
            </Button>
            <Button
              color="default"
              onClick={() => setActiveTab("orders")}
              variant={activeTab == "orders" ? "faded" : "flat"}
            >
              Orders
            </Button>
            <Button
              color="default"
              onClick={() => setActiveTab("password")}
              variant={activeTab == "password" ? "faded" : "flat"}
            >
              Password
            </Button>
            <Button onClick={handleSignOut} color="warning" variant="bordered">
              Exit
            </Button>
          </ButtonGroup>

          <div className="mt-10">
            <div className={activeTab !== "account" ? "hidden" : ""}>
              <form className="grid grid-cols-12 md:grid-cols-12 gap-4">
                <Input
                  size="lg"
                  type="text"
                  className="col-span-full md:col-span-4"
                  label="Name"
                  name="name"
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
                  className="col-span-full md:col-span-4"
                  label="Phone Number"
                  name="phone"
                  labelPlacement="outside"
                  variant="bordered"
                  onBlur={formik.handleBlur}
                  startContent={
                    <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  errorMessage={
                    formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : null
                  }
                  isInvalid={
                    formik.touched.phone && formik.errors.phone ? true : false
                  }
                  onChange={formik.handleChange("phone")}
                  value={formik.values.phone}
                  color={
                    formik.touched.phone && formik.errors.phone && "danger"
                  }
                />

                <Input
                  size="lg"
                  type="text"
                  className="col-span-full md:col-span-4"
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
                  color={
                    formik.touched.email && formik.errors.email && "danger"
                  }
                  isRequired
                />

                <Input
                  size="lg"
                  type="text"
                  className="col-span-full md:col-span-4"
                  label="City"
                  name="city"
                  labelPlacement="outside"
                  variant="bordered"
                  onBlur={formik.handleBlur}
                  startContent={
                    <CityIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  errorMessage={
                    formik.touched.city && formik.errors.city
                      ? formik.errors.city
                      : null
                  }
                  isInvalid={
                    formik.touched.city && formik.errors.city ? true : false
                  }
                  onChange={formik.handleChange("city")}
                  value={formik.values.city}
                  color={formik.touched.city && formik.errors.city && "danger"}
                />

                <Input
                  size="lg"
                  type="text"
                  className="col-span-full md:col-span-4"
                  label="Province"
                  name="province"
                  labelPlacement="outside"
                  variant="bordered"
                  onBlur={formik.handleBlur}
                  startContent={
                    <ProvinceIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  errorMessage={
                    formik.touched.province && formik.errors.province
                      ? formik.errors.province
                      : null
                  }
                  isInvalid={
                    formik.touched.province && formik.errors.province
                      ? true
                      : false
                  }
                  onChange={formik.handleChange("province")}
                  value={formik.values.province}
                  color={
                    formik.touched.province &&
                    formik.errors.province &&
                    "danger"
                  }
                  isRequired
                />

                <Textarea
                  size="lg"
                  type="text"
                   className="col-span-full md:col-span-full"
                  label="Address"
                  name="address"
                  labelPlacement="outside"
                  variant="bordered"
                  onBlur={formik.handleBlur}
                  startContent={
                    <MapIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  errorMessage={
                    formik.touched.address && formik.errors.address
                      ? formik.errors.address
                      : null
                  }
                  isInvalid={
                    formik.touched.address && formik.errors.address
                      ? true
                      : false
                  }
                  onChange={formik.handleChange("address")}
                  value={formik.values.address}
                  color={
                    formik.touched.address && formik.errors.address && "danger"
                  }
                />
              </form>
              <div className=" flex justify-end mt-5">
                <Button
                  onClick={() => {
                    formik.submitForm();
                  }}
                  startContent={
                    <SaveIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  color="primary"
                  variant="flat"
                  className=" text-lg"
                >
                  Save
                </Button>
              </div>
            </div>

            <div className={activeTab !== "password" ? "hidden" : ""}>
              <form className="grid justify-center gap-4">
                <Input
                  className="col-span-4"
                  size="lg"
                  name="password"
                  label="Password"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Enter your password"
                  startContent={
                    <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type="text"
                  onValueChange={setPassword}
                  isRequired
                  description="Password must be at least 5 characters long"
                />
                <Input
                  className="col-span-4"
                  size="lg"
                  name="passwordConfirmed"
                  label="Confirmed Password"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Confirmed password"
                  startContent={
                    <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  type="text"
                  onValueChange={setPasswordConfirmed}
                  isRequired
                />
              </form>
              <div className=" flex justify-end mt-5">
                <Button
                  onClick={() => updatePassword()}
                  startContent={
                    <SaveIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  color="primary"
                  variant="flat"
                  className=" text-lg"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
