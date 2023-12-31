import React, { PropsWithChildren, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

function HomeTemplate(props: PropsWithChildren) {
  return (
    <div>
      <Header/>
      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default HomeTemplate;
