import { useLocation } from "react-router-dom";
// import logo from "../../assets/logo/logo2.png";
import logo from "../../assets/logo/logo.svg";
import searchIcon from "../../assets/navAssests/MagnifyingGlass.svg";
import avatar from "../../assets/navAssests/avatar.svg";

export default function Nav() {

  const location = useLocation();

  const pageTitles = {
    '/': 'Welcome Back, Alesia',
    '/commissions': 'Commissions',
    '/account': 'Account',
    '/load-management': 'Load Management',
    '/acc-invoice' : 'Account',
    '/rate-calculator':'Commissions'
  };
  
  const pageTitle = pageTitles[location.pathname] || '';


  return (
    <>
      <nav className="flex  items-center bg-[#F8F9FA] border-b border-[#E5E7E8]">
        {/* logo */}
        <div className="py-10 px-11">
          <img src={logo} alt="" />
        </div>
        {/* right side  */}
        <div className="flex items-center justify-between px-6 flex-1">
          {/* title  */}
          <h2 className="text-2xl leading-none font-semibold tracking-[0.48px]  text-textColor ">
            {pageTitle}
          </h2>

          {/* right side content-- */}
          <div className="flex gap-5 items-center  ">
            {/* search bar--  */}
            <fieldset className="bg-[#F5F6F6] flex gap-[10px] pl-[14px] w-80 pr-2 border border-[#CDD1D4] rounded-[10px] py-[10px]">
              <button>
                <img src={searchIcon} alt="" />
              </button>
              <input
                style={{ background: "transparent" }}
                type="search"
                placeholder="Search anything"
                className="placeholder-[#AAB0B6]  font-normal w-full text-lg outline-none -tracking-[0.16px]"
              />
            </fieldset>

            {/* line 1  */}
            <svg
              width="1"
              height="28"
              viewBox="0 0 1 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="28"
                stroke="#CDD1D4"
              />
            </svg>

            {/* setting and heads icon -- */}
            <div className="flex items-center gap-[14px] ">
              {/* setting button-- */}
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_26507)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2449 9.52494C14.7007 9.21145 14.3628 8.62743 14.3628 8.00011C14.3628 7.3731 14.7007 6.78908 15.2433 6.4759C15.8002 6.15574 16.0318 5.49051 15.7938 4.89427C15.4956 4.14111 15.0894 3.43766 14.5897 2.80316C14.1914 2.29799 13.4997 2.16569 12.9428 2.48791C12.4002 2.80316 11.7243 2.80411 11.1802 2.49028C10.6376 2.17645 10.3012 1.59149 10.3028 0.963052C10.3028 0.320161 9.84269 -0.21338 9.2065 -0.305396C8.40687 -0.421211 7.59457 -0.420568 6.79176 -0.303026C6.15713 -0.210367 5.69705 0.32287 5.6986 0.964474C5.6986 1.59213 5.36223 2.17676 4.81965 2.49028C4.27544 2.80377 3.60117 2.80313 3.057 2.48822C2.50013 2.16599 1.80839 2.29894 1.41016 2.80411C1.16265 3.11889 0.934172 3.4554 0.732706 3.80491C0.531206 4.15381 0.355096 4.5195 0.205969 4.89122C-0.0336173 5.48841 0.198047 6.15459 0.754914 6.47556C1.29912 6.78874 1.63705 7.37307 1.63705 8.00008C1.63705 8.62709 1.29912 9.21094 0.756505 9.5246C0.199638 9.8448 -0.0319923 10.5097 0.205969 11.1058C0.504258 11.8594 0.910406 12.5629 1.41016 13.197C1.80839 13.7022 2.50013 13.8345 3.057 13.5123C3.59961 13.197 4.27548 13.1964 4.81965 13.5099C5.36223 13.8237 5.6986 14.4087 5.6986 15.0371C5.69701 15.6798 6.15868 16.2134 6.79331 16.3056C7.19154 16.3632 7.59136 16.3919 7.99114 16.3919C8.39732 16.3919 8.80347 16.3624 9.20803 16.3032C9.84266 16.2104 10.3027 15.6776 10.3027 15.036C10.3011 14.408 10.6375 13.8234 11.1801 13.5099C11.7243 13.1964 12.3986 13.197 12.9428 13.5119C13.4996 13.8342 14.1914 13.7015 14.5896 13.1961C14.8371 12.8811 15.0656 12.5446 15.267 12.1956C15.467 11.8467 15.6462 11.481 15.7938 11.1089C16.0334 10.5118 15.8018 9.8454 15.2449 9.52494ZM10.1584 9.24666C9.82682 9.82323 9.28897 10.2359 8.64487 10.4082C8.00231 10.5805 7.3296 10.4921 6.75367 10.1589C5.56376 9.47162 5.15443 7.94425 5.8414 6.75354C6.30151 5.95485 7.14238 5.50777 8.00387 5.50777C8.42749 5.50777 8.85429 5.61502 9.24615 5.84127C10.4361 6.52841 10.8454 8.05624 10.1584 9.24666Z"
                      fill="#3A3C3F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_26507">
                      <rect
                        width="17.3333"
                        height="17.3333"
                        fill="white"
                        transform="translate(-0.666748 -0.666626)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/* headphone icon-- */}
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_43_10811)">
                    <g clipPath="url(#clip1_43_10811)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.61438 14.5385C9.61438 13.9855 9.16606 13.5371 8.61306 13.5371H7.38694C7.12138 13.5371 6.86669 13.6426 6.67891 13.8304C6.49113 14.0182 6.38562 14.2729 6.38562 14.5385C6.38562 15.0915 6.83394 15.5398 7.38694 15.5398H8.61306C9.16606 15.5398 9.61438 15.0915 9.61438 14.5385ZM2.10503 11.9565C2.27228 11.9693 2.47463 11.9766 2.67788 11.9647C2.78616 12.5138 3.05516 13.0231 3.45669 13.4247C3.98975 13.9577 4.71272 14.2572 5.46656 14.2572H5.84863C5.83178 14.3494 5.82312 14.4435 5.82312 14.5385C5.82312 14.6345 5.83178 14.7285 5.84837 14.8197H5.46656C4.56353 14.8197 3.69747 14.461 3.05894 13.8225C2.54953 13.313 2.21819 12.6588 2.10503 11.9565ZM1.81891 11.358C1.37481 11.2831 0.961563 11.072 0.638969 10.7493C0.229844 10.3402 0 9.7853 0 9.2067V7.87723C0 7.29864 0.229844 6.74373 0.638969 6.33461C1.04809 5.92548 1.603 5.69561 2.18159 5.69561H2.32681C2.55894 2.76573 5.01025 0.460327 8 0.460327C10.9897 0.460327 13.4411 2.76573 13.6732 5.69561H13.8184C14.397 5.69561 14.9519 5.92548 15.361 6.33461C15.7702 6.74373 16 7.29864 16 7.87723V9.2067C16 9.7853 15.7702 10.3402 15.361 10.7493C14.9519 11.1585 14.397 11.3883 13.8184 11.3883H13.1746C12.9076 11.3883 12.6912 11.1719 12.6912 10.9049V6.15151C12.6912 3.56064 10.5909 1.46033 8 1.46033C5.40913 1.46033 3.30881 3.56064 3.30881 6.15151V10.9049C3.30881 11.0934 3.20091 11.2567 3.04347 11.3365C2.61009 11.4868 1.938 11.378 1.81891 11.358Z"
                        fill="#3A3C3F"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_43_10811">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_43_10811">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>

            {/* line 2  */}
            <svg
              width="1"
              height="28"
              viewBox="0 0 1 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="28"
                stroke="#CDD1D4"
              />
            </svg>

            {/* avatar--- */}
            <img src={avatar} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
