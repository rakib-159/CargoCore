export default function CommissionModal({setModal}) {
  return (
    <>
      <div className="  flex justify-center">
        <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end  justify-center  px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              style={{
                boxShadow: "1px 1px 114px 0px rgba(0, 0, 0, 0.10)",
              }}
              className=" inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-[#FFF] rounded-[16px]   sm:my-8 max-w-fit sm:px-5 sm:pt-5 sm:pb-[60px] sm:align-middle"
            >
              {/*part 1--- */}
              <div className="flex items-center mb-5 justify-between">
                <h2 className="text-base font-semibold text-textColor tracking-[0.32px] whitespace-nowrap">
                  Commission Report Criteria
                </h2>
                <button onClick={() => setModal(true) } >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3L13 13M13 3L3 13"
                      stroke="#6C757D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className=" mt-3">
                {/* part 2-- */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium tracking-[0.28px]">
                    Commissionable Status
                  </h4>
                  <div className="flex items-center gap-[13px]">
                    <button className="font-normal text-sm text-[#808990] py-2 px-4 rounded-[8px] border border-[#CDD1D4]">
                      Commissionable
                    </button>
                    <button className="font-normal text-sm text-[#FE4711] whitespace-nowrap py-2 px-4 rounded-[8px] border border-[#FE4711]">
                      Non-Commissionable
                    </button>
                  </div>
                </div>

                {/* part 3 */}
                <form className="mt-5" action="#">
                  <div className="mb-5" >
                    <label className="text-sm  font-medium tracking-[0.28px]">
                      Commissionable Status
                    </label>

                    <label className="block mt-3 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="% of Gross Revenue"
                        className="block w-full px-4 py-[8px] text-sm  placeholder-[#808990]  border border-[#CDD1D4] rounded-[8px] focus:border-blue-400 focus:outline-none focus:ring focus:ring-[#FE4711] focus:ring-opacity-40    dark:focus:border-blue-300"
                      />
                      <button className="absolute right-2 top-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1429 12.8571H12.8571V17.1429C12.8571 17.3702 12.7668 17.5882 12.6061 17.7489C12.4453 17.9097 12.2273 18 12 18C11.7727 18 11.5547 17.9097 11.3939 17.7489C11.2332 17.5882 11.1429 17.3702 11.1429 17.1429V12.8571H6.85714C6.62981 12.8571 6.4118 12.7668 6.25105 12.6061C6.09031 12.4453 6 12.2273 6 12C6 11.7727 6.09031 11.5547 6.25105 11.3939C6.4118 11.2332 6.62981 11.1429 6.85714 11.1429H11.1429V6.85714C11.1429 6.62981 11.2332 6.4118 11.3939 6.25105C11.5547 6.09031 11.7727 6 12 6C12.2273 6 12.4453 6.09031 12.6061 6.25105C12.7668 6.4118 12.8571 6.62981 12.8571 6.85714V11.1429H17.1429C17.3702 11.1429 17.5882 11.2332 17.7489 11.3939C17.9097 11.5547 18 11.7727 18 12C18 12.2273 17.9097 12.4453 17.7489 12.6061C17.5882 12.7668 17.3702 12.8571 17.1429 12.8571Z"
                            fill="#808990"
                          />
                        </svg>
                      </button>
                    </label>
                  </div>

                  <div className="my-5" >
                    <label className="text-sm font-medium tracking-[0.28px]">
                      Commissionable Amount <br /> (Gross Revenuew)
                    </label>

                    <label className="block mt-3 ">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="% of Gross Revenue"
                        className="block w-full px-4 py-[8px] text-sm  placeholder-[#808990]  border border-[#CDD1D4] rounded-[8px] focus:border-blue-400 focus:outline-none focus:ring focus:ring-[#FE4711] focus:ring-opacity-40    dark:focus:border-blue-300"
                      />
                    </label>
                  </div>

                  <div className="my-5" >
                    <label className="text-sm font-medium tracking-[0.28px]">
                      Commission Rate Amount
                    </label>

                    <label className="block mt-3 ">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="% of Gross Revenue"
                        className="block w-full px-4 py-[8px] text-sm  placeholder-[#808990]  border border-[#CDD1D4] rounded-[8px] focus:border-blue-400 focus:outline-none focus:ring focus:ring-[#FE4711] focus:ring-opacity-40    dark:focus:border-blue-300"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium tracking-[0.28px]">
                      Total Commission
                    </label>

                    <label className="block mt-1 ">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        readOnly
                        placeholder="$645765 * 5%"
                        className="block w-full px-4 py-[8px] text-sm  placeholder-[#808990]  rounded-[8px] outline-none focus:outline-none "
                      />
                    </label>
                  </div>


                  <div className="mt-1 mb-6 text-center" >
                    <h5 className="text-base font-semibold tracking-[0.32px] text-[#3A3C3F]" >$3546</h5>
                  </div>

                  <div className="flex gap-[13px]">
                    <button
                    onClick={() => setModal(true) }
                      type="button"
                      className="text-sm flex-grow font-medium text-[#808990] py-2 px-4 rounded-[8px] border border-[#CDD1D4]"
                    >
                     Cancel
                    </button>
                    <button
                      type="button"
                      className="text-sm flex-grow font-medium text-white bg-[#FE4711] py-2 px-4 rounded-[8px] border border-[#CDD1D4]"
                    >
                    Save
                    </button>

                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
