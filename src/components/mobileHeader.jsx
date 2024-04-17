import { useState } from "react";

const MobileHeader = () => {
  const [visibility, setVisibility] = useState("none");

  function displayHandler() {
    visibility === "none" ? setVisibility("block") : setVisibility("none");
  }

  return (
    <div className="font-montserrat">
      <button className="relative flex ml-3 mt-3 font-medium text-lg" onClick={displayHandler} href="#" >
        MORE
      </button> 

      <div
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ml-3 absolute py-2 px-2 mt-3 text-sm bg-[#fff]  w-[12rem] h-[12rem]"
        style={{
          display: visibility,
        }}
      >
        <a href="/">Home</a>
        <br />
        <a href="/sobre">A Empresa</a>
        <br />
        <a href="/servicos">Serviços</a>
        <br />
        <a href="/contato">Contato</a>
        <br />
        <a href="/faq">FAQ</a>
      </div>
    </div>
  );
};

export default MobileHeader;
