import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function Layuot() {
  return (
    <div className="mx-25">
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
