import React, { PropsWithChildren, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderAdmin from "./header-admin/headerAdmin"
function AdminTemplate(props: PropsWithChildren) {
  return (
    <div>
      <HeaderAdmin/>
      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default AdminTemplate;
