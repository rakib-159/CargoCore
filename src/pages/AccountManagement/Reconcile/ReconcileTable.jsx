import { useEffect, useState } from "react";

export default function ReconcileTable() {
  const [tData, setTdata] = useState([]);

  useEffect(() => {
    fetch("/reconcile.json")
      .then((res) => res.json())
      .then((data) => setTdata(data));
  }, []);

  

  return (
    <>
      <section className="container  mx-auto">
        <div className="flex flex-col">
          <div className=" overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className="overflow-hidden border-t border-b border-[#DFE1E6] ">
                <table className="min-w-full divide-y  divide-[#DFE1E6]">
                  <thead className=" text-[#414449] text-sm font-semibold tracking-[0.28px]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  text-left rtl:text-right "
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-[#FE4711] block border-[1.017px] rounded-[ 4.069px] w-4 h-4 bg-[#FFF]   border-[#DFE1E6]"
                          />
                          <button className="flex items-center gap-x-1">
                            <span>Load ID</span>

                            <svg
                              width="17"
                              height="18"
                              viewBox="0 0 17 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.74609 11.0345L8.13669 14.4251L11.5273 11.0345M4.74609 6.96579L8.13669 3.5752L11.5273 6.96579"
                                stroke="#414449"
                                strokeWidth="1.52577"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-center rtl:text-right "
                      >
                        Company Name(s)
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-center rtl:text-right "
                      >
                        Paid Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right "
                      >
                        <button className="flex items-center gap-x-1">
                          <span>Invoice(s) Total</span>

                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.74609 11.0345L8.13669 14.4251L11.5273 11.0345M4.74609 6.96579L8.13669 3.5752L11.5273 6.96579"
                              stroke="#414449"
                              strokeWidth="1.52577"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right "
                      >
                        <button className="flex items-center gap-x-1">
                          <span>Bill(s) Total</span>

                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.74609 11.0345L8.13669 14.4251L11.5273 11.0345M4.74609 6.96579L8.13669 3.5752L11.5273 6.96579"
                              stroke="#414449"
                              strokeWidth="1.52577"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5  text-left rtl:text-right"
                      >
                        <button className="flex items-center gap-x-1">
                          <span>Gross P/L</span>

                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.74609 11.0345L8.13669 14.4251L11.5273 11.0345M4.74609 6.96579L8.13669 3.5752L11.5273 6.96579"
                              stroke="#414449"
                              strokeWidth="1.52577"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y tracking-[0.28px] divide-[#DFE1E6] text-sm font-normal text-[#414449]  ">
                    {tData?.map((data, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4  whitespace-nowrap">
                          <div className="inline-flex  gap-x-3">
                            <input
                              type="checkbox"
                              className="text-[#FE4711] block border-[1.017px] rounded-[ 4.069px] w-4 h-4 bg-[#FFF]   border-[#DFE1E6]"
                            />

                            <span>{data.load_id}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center  whitespace-nowrap">
                          {data.company_name}
                        </td>
                        <td className="px-4 py-4 flex justify-center  whitespace-nowrap">
                          <div className="inline-flex gap-3  items-center px-3 py-1 ">
                            <button className="py-[2px] px-4 bg-[#D4EDDA] rounded-md">
                              1/1 Invoice Paid
                            </button>
                            <button className="py-[2px] px-4 bg-[#D4EDDA] rounded-md">
                              2/2 Bill Paid
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center  whitespace-nowrap">
                          {data.invoice_total}
                        </td>
                        <td className="px-4 py-4  text-center whitespace-nowrap">
                          <span className="mr-4">{data.bills_total}</span>
                        </td>
                        <td className="px-4 py-4  text-center  whitespace-nowrap">
                          <span className="mr-4">{data.gross_pl}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 mb-4 pl-4 pr-5">
          <div className=" flex text-xs items-center gap-3 font-normal text-[#3A3C3F]">
            <button className="border rounded-[8px] flex items-center gap-2 border-[#CDD1D4]  py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_1_29656)">
                  <path
                    d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.3702 6.76684 11.5882 6.60609 11.7489C6.44535 11.9097 6.22733 12 6 12C5.77267 12 5.55465 11.9097 5.39391 11.7489C5.23316 11.5882 5.14286 11.3702 5.14286 11.1429V6.85714H0.857143C0.629814 6.85714 0.411797 6.76684 0.251051 6.60609C0.090306 6.44535 0 6.22733 0 6C0 5.77267 0.090306 5.55465 0.251051 5.39391C0.411797 5.23316 0.629814 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.629814 5.23316 0.411797 5.39391 0.251051C5.55465 0.0903056 5.77267 0 6 0C6.22733 0 6.44535 0.0903056 6.60609 0.251051C6.76684 0.411797 6.85714 0.629814 6.85714 0.857143V5.14286H11.1429C11.3702 5.14286 11.5882 5.23316 11.7489 5.39391C11.9097 5.55465 12 5.77267 12 6C12 6.22733 11.9097 6.44535 11.7489 6.60609C11.5882 6.76684 11.3702 6.85714 11.1429 6.85714Z"
                    fill="#3A3C3F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_29656">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>10</span>
            </button>

            <span className="font-medium tracking-[0.24px] ">
              Loads Per Page
            </span>
          </div>

          <div className="flex gap-3">
            <button className="p-[4px] rounded-[8px] bg-[#AAB0B6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.1599 7.41L10.5799 12L15.1599 16.59L13.7499 18L7.74991 12L13.7499 6L15.1599 7.41Z"
                  fill="#E5E7E8"
                />
              </svg>
            </button>

            <a
              href="#"
              className="text-[#FE4711] border border-[#FE4711] w-[32px] h-[32px] text-center rounded-[8px] py-[5px] px-[4px] "
            >
              1
            </a>
            <a
              href="#"
              className="text-textColor border border-[#E5E7E8] w-[32px] h-[32px] text-center rounded-[8px] py-[5px] px-[4px] "
            >
              2
            </a>

            <a
              href="#"
              className="text-textColor border border-[#E5E7E8] w-[32px] h-[32px] flex items-end justify-center rounded-[8px] py-[5px] px-[4px] "
            >
              ..
            </a>

            <a
              href="#"
              className="text-textColor border border-[#E5E7E8] w-[32px] h-[32px] text-center rounded-[8px] py-[5px] px-[4px] "
            >
              9
            </a>
            <a
              href="#"
              className="text-textColor border border-[#E5E7E8] w-[32px] h-[32px] text-center rounded-[8px] py-[5px] px-[4px] "
            >
              10
            </a>

            <button className="p-[4px] rounded-[8px] border border-[#808990]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.84009 7.41L13.4201 12L8.84009 16.59L10.2501 18L16.2501 12L10.2501 6L8.84009 7.41Z"
                  fill="#889097"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
