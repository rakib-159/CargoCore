import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { IoCheckmarkCircle } from "react-icons/io5";
import WorldMap from "../shared/map/WorldMap";

const MapModal = ({fn}) => {
  const [activeButton, setActiveButton] = useState(false);
  const mapModalRef = useRef(null);
  const btnParentRef = useRef(null);
  const detailsRef = useRef(null);

  console.log(fn)

  useEffect(() => {
    // Use gsap.to to toggle the x position of the button based on activeButton state
    gsap.to(detailsRef.current, {
      x: activeButton ? 103 : 0,
      duration: 0.5,
    });
  }, [activeButton]);



  return (
    <div
      ref={mapModalRef}
      className="  border-2 border-borderColor pt-10 rounded-2xl"
    >
      <button
        onClick={fn}
        className="absolute top-2 right-4 text-xl"
      >
        ✕
      </button>
      <div className=" px-6 flex justify-between">
        <div>
          <div className="flex gap-5">
            <p className="text-lg font-medium">#10045</p>
            <span>&#8942;</span>
          </div>
          <small>Active</small>
        </div>
        <div
          ref={btnParentRef}
          className="relative button-group w-52 h-12 bg-borderColor rounded-xl p-1"
        >
          <div className="absolute w-full flex justify-between items-center pl-3 pr-5 pt-2">
            <p>Details</p>
            <p>Tracking</p>
          </div>
          <button
            ref={detailsRef}
            className={`details-btn w-24 py-2 text-white rounded-xl font-medium bg-primaryColor ${
              activeButton ? "active" : "details"
            }`}
            onClick={() => setActiveButton(!activeButton)}
          >
            {activeButton ? <>Tracking</> : <>Details</>}
          </button>
        </div>
      </div>

      <div className=" px-6 mt-5 flex justify-center items-center gap-1">
        <div>
          <IoCheckmarkCircle className="text-3xl text-primaryColor" />
        </div>
        <div className="w-[70px] h-[2px] bg-primaryColor"></div>
        <div>
          <IoCheckmarkCircle className="text-3xl text-primaryColor" />
        </div>
        <div className="w-[70px] h-[2px] bg-primaryColor"></div>
        <div className="w-[25px] h-[25px] mx-1 border-2 border-borderColor rounded-full flex justify-center items-center">
          <small className="text-[10px]">03</small>
        </div>
        <div className="w-[70px] h-[2px] bg-borderColor"></div>
        <div className="w-[25px] h-[25px] mx-1 border-2 border-borderColor rounded-full flex justify-center items-center">
          <small className="text-[10px]">04</small>
        </div>
        <div className="w-[70px] h-[2px] bg-borderColor"></div>
        <div className="w-[25px] h-[25px] ml-1 border-2 border-borderColor rounded-full flex justify-center items-center">
          <small className="text-[10px]">05</small>
        </div>
      </div>
      <div className=" px-6 mt-3 mb-8 flex justify-between text-[14px]">
        <p>Booking</p>
        <p>Port Loading</p>
        <p>In Transit</p>
        <p>Port Unloading</p>
        <p>Delivary</p>
      </div>
      <div className="h-[80vh]">
        <WorldMap />
      </div>
    </div>
  );
};

export default MapModal;
