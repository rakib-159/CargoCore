export default function RightTop() {
  return (
    <>
      <div className="flex  justify-between" >
        {/* left-- */}
        <div className="flex items-center gap-[8.45px]" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M0.612793 2.30496C0.612793 1.3704 1.3704 0.612793 2.30496 0.612793H24.3031C25.2376 0.612793 25.9953 1.3704 25.9953 2.30496V24.3031C25.9953 25.2376 25.2376 25.9953 24.3031 25.9953H2.30496C1.3704 25.9953 0.612793 25.2376 0.612793 24.3031V2.30496Z"
              fill="#D7D7D7"
              fillOpacity="0.3"
            />
          </svg>
          <div>
            <h3 className="text-[13.537px] font-semibold uppercase text-[#101011]" >Invoice</h3>
            <h5 className="text-[#101011] text-[7.615px] tracking-[0.076px]" >COMPANY LLC</h5>
          </div>
        </div>
        {/* right-- */}
        <div>
            <h4 className="text-[#101011] font-semibold tracking-[0.076px]  " >#2023-00</h4>
            <h5 className="text-[#484B4E] text-[7.615px]   tracking-[0.076px] font-normal " >INVOICE NUMBER</h5>
        </div>
      </div>
    </>
  );
}
