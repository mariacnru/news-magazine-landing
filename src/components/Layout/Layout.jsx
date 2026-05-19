import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function Layuot() {
  return (
    <div>
      <section>
        <Navbar />
        <main className="mx-4 md:mx-8 lg:mx-15">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Layuot;
