import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function Layuot() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-25 mt-7">
      <section>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Layuot;
