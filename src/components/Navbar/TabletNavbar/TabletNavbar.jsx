import React, { useState } from "react";
import Top from "./components/Top";
import Input from "./components/Input";
import Menue from "./components/Menue";

function TabletNavbar() {
  const [menueFlag, setMenueFlag] = useState(false);

  return (
    <div className="hidden md:block lg:hidden py-3 px-8 bg-white">
      <Top setMenueFlag={setMenueFlag} />
      <Input />
      <Menue menueFlag={menueFlag} setMenueFlag={setMenueFlag} />
    </div>
  );
}

export default TabletNavbar;
