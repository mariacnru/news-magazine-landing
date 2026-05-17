import React, { useState } from "react";
import Top from "./components/Top";
import Menue from "./components/Menue";

function MobileNavbr() {
  const [menueFlag, setMenueFlag] = useState(false);

  return (
    <div className="block md:hidden mx-2 mt-5">
      <Top setMenueFlag={setMenueFlag} />
      <Menue menueFlag={menueFlag} setMenueFlag={setMenueFlag} />
    </div>
  );
}

export default MobileNavbr;
