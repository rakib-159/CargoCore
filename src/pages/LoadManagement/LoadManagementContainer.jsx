import LoadHeader from "./LoadHeader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import searchIcon from "../../assets/navAssests/MagnifyingGlass.svg";
import LoadTable from "./LoadTable";
import MapModal from "../../modal/MapModal";
import { useEffect, useRef, useState } from "react";
import LoadModal from "./LoadModal";

export default function LoadManagementContainer() {
  const [isBool, setIsBool] = useState(true)
  const [checkedIndex, setCheckedIndex] = useState(null);
  const showModalRef = useRef(null)
  const handleMapModal = () => {
    setIsBool(!isBool)
    console.log(isBool)
  };

   useEffect(() => {
     if (checkedIndex) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "";
     }
   }, [checkedIndex]);

   
  return (
    <>
    <section className="pr-5 relative">
      <header>
        <LoadHeader />
      </header>

      <Tabs defaultIndex={0}>
        <main className="border border-[#E5E7E8] bg-[#FFF] rounded-[16px]">
          {/* tab with filter --- */}
          <div className="flex items-center  py-5 justify-between px-4">
            {/* search field */}
            {/* search-- */}
            <fieldset className=" flex gap-[10px] py-[8px]   pr-[154px] border border-[#CDD1D4] rounded-[12px] pl-3">
              <button>
                <img src={searchIcon} alt="" />
              </button>
              <input
                style={{ background: "transparent" }}
                type="search"
                placeholder="Search Load"
                className="placeholder-[#AAB0B6]  font-normal w-full text-sm outline-none -tracking-[0.16px]"
              />
            </fieldset>

            {/* tab side -- */}

            <div className="flex gap-5 items-start">
              <TabList>
                <Tab>Active</Tab>
                <Tab>Planning</Tab>
                <Tab>Accounting</Tab>
                <Tab>Misc.</Tab>
                <Tab>All Live Loads</Tab>
              </TabList>
              <button onClick={handleMapModal}>
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_27680)">
                    <rect
                      x="10.4502"
                      y="9.2251"
                      width="32.5497"
                      height="32.5497"
                      rx="8"
                      fill="white"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M27.8575 22.3855L32.1301 22.3855"
                      stroke="#808897"
                      strokeWidth="1.52577"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.3001 22.4121C21.3001 23.2907 22.0171 24.0032 22.9021 24.0032C23.7876 24.0032 24.5051 23.2907 24.5051 22.4121C24.5051 21.5335 23.7876 20.8211 22.9021 20.8211C22.0171 20.8211 21.3001 21.5335 21.3001 22.4121Z"
                      stroke="#808897"
                      strokeWidth="1.52577"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.9517 28.9582L21.679 28.9582"
                      stroke="#808897"
                      strokeWidth="1.52577"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.9449 28.9949C28.9449 29.8735 29.6625 30.5859 30.5474 30.5859C31.4323 30.5859 32.1499 29.8735 32.1499 28.9949C32.1499 28.1163 31.4323 27.4039 30.5474 27.4039C29.6625 27.4039 28.9449 28.1163 28.9449 28.9949Z"
                      stroke="#808897"
                      strokeWidth="1.52577"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_27680"
                      x="0.450195"
                      y="0.225098"
                      width="52.5498"
                      height="52.5498"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_27680"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_27680"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <TabPanel>
            <LoadTable  setCheckedIndex={setCheckedIndex} checkedIndex={checkedIndex} />
          </TabPanel>
          <TabPanel>
            <LoadTable />
          </TabPanel>
          <TabPanel>
            <LoadTable />
          </TabPanel>
          <TabPanel>
            <LoadTable />
          </TabPanel>
          <TabPanel>
            <LoadTable />
          </TabPanel>
        </main>
      </Tabs>

      <div className={`fixed ${checkedIndex ? "flex":"hidden" } items-center justify-center bg-red-800/20 inset-0`}>
        <LoadModal setCheckedIndex={setCheckedIndex} />
        </div>
      <div ref={showModalRef} className={`absolute rounded-2xl shadow-2xl top-0 right-0 bg-slate-300 ${isBool?"hidden":""}`}>
        <MapModal fn={handleMapModal}/>
      </div>
    </section>
   </>
  );
}
