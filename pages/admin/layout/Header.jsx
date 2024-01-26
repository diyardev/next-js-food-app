import React from "react";
import NavbarWrapper from "./inc/navbar/Navbar";
import { SidebarWrapper } from "./inc/sidebar/sidebar";

const AdminHeader = () => {
  return (
    <div className="dark bg-content1">
      {/* <SidebarWrapper /> */}
      <NavbarWrapper />
    </div>
  );
};

export default AdminHeader;
