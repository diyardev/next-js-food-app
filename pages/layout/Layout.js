import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AdminHeader from "../admin/layout/Header";
import AdminFooter from "../admin/layout/Footer";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { usePathname } from "next/navigation";
import axios from "axios";

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
};

const Layout = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      var cookie = getCookie("token");
      if (cookie != null) {
        // const user =  axios.get(
        //   `${process.env.NEXT_PUBLIC_API_URL}/users/pull/${session.email}`
        // );
        // setAdminUser(user.data)
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [pathname]);

  return (
    <React.Fragment>
      {isAdmin && pathname.includes("admin") ? (
        <>
          <AdminHeader />
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
          <AdminFooter />
        </>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};

export default Layout;
