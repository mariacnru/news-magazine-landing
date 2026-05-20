import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function Layuot() {
  return (
    <div>
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
