import React from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default App;
