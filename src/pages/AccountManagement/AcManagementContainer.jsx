import ReconcileHeader from "./Reconcile/ReconcileHeader";
import ReconcileTable from "./Reconcile/ReconcileTable";
import searchIcon from "../../assets/navAssests/MagnifyingGlass.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import "./tab.css";
import InvoiceCard from "./Invoice/InvoiceCard";
import InvoiceTable from "./Invoice/invoiceTable";
import PaymentInvoiceTab from "./Invoice/PaymentInvoice/PaymentInvoiceTab";
import { Helmet } from "react-helmet-async";


export default function AcManagementContainer() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
    <Helmet>
      <title>Account | Cargo-Core</title>
    </Helmet>
    <section className="pr-5 mb-5">
      <header>
        <ReconcileHeader tabIndex={tabIndex} />
      </header>
     
      <div>{tabIndex === 0 && <InvoiceCard />}</div>

      <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
        <main className="border  border-[#E5E7E8] bg-[#FFF] rounded-[16px]">
         
          <div className="flex items-center py-5 justify-between px-4">
          

            <TabList>
              <Tab>Invoices</Tab>
              <Tab>Bills</Tab>
              <Tab>Reconcile & Archive</Tab>
              <Tab>Search Archived Loads</Tab>
            </TabList>

            
            <div className="flex items-center gap-3 ">
              
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

             

              <select
                className="rounded-[8px] border-[#CDD1D4] border py-[10px] px-3 text-sm font-normal -tracking-[0.14px]"
                name=""
                id=""
              >
                <option value="all">All</option>
                <option value="no-all">No All</option>
              </select>
            </div>
          </div>
          <TabPanel>
          <InvoiceTable/>
          
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
          <ReconcileTable />
          </TabPanel>
          <TabPanel>
          
          </TabPanel>
        </main>
      </Tabs>
    </section>
    </>
  );
}
