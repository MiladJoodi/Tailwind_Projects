// https://github.com/CodeFarsi/digi-clone
import React from "react";
import { NavBar } from "./components/NavBar";
import { UserNav } from "./components/UserNav";
import { Address } from "./components/Address";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex flex-col" dir="rtl">
      {/* start header */}
      <div className="w-full h-44 bg-white flex flex-col p-4 divide-y-2 divide-gray-100">
        <NavBar />
        <UserNav />
        <Address />
        <Slider />
      </div>
    </div>
  );
}

export default App;
