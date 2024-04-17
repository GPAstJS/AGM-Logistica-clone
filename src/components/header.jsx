import SiteLogo from "../assets/site-logo.png";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";

import { useScreenSize } from "../hooks/useScreenSize";

export default function Header() {
  const url = window.location.href;

  return (
    <div className="w-full flex flex-row justify-center pt-[2.75rem]">
      <div
        className="3xl:w-[75rem] sm:w-[90%] flex 3xl:flex-row sm:flex-col "
        style={
          useScreenSize() <= 1160
            ? { flexDirection: "column", alignItems: "start" }
            : {
                flexDirection:
                  url !== "http://localhost:3000/" ? "row" : "column",
                alignItems:
                  url !== "http://localhost:3000/" ? "center" : "start",
              }
        }
      >
        <div className="w-[18.128em] h-[4.5rem] mb-[1rem] ml-[0.5rem] mt-[1rem] flex flex-col">
          <img src={SiteLogo} alt="AGM Logomarca" />
        </div>

        {useScreenSize() <= 1160 ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </div>
  );
}
