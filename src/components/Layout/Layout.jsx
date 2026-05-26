import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layuot() {
  return (
    <div>
      <section>
        <Navbar />
        <main>
          <Outlet />
          <ScrollRestoration />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default Layuot;
