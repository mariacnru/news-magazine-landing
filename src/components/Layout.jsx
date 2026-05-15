import React from "react";
import { Outlet } from "react-router";

function Layuot() {
  return (
    <div>
      <section>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Layuot;
