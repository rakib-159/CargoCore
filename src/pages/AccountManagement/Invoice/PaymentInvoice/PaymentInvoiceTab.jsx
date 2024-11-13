import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ButtonTop from "./PaymentLeft/ButtonTop";
import LeftFirstPart from "./PaymentLeft/LeftFirstPart";
import LeftSecondPart from "./PaymentLeft/LeftSecondPart";
import RightTop from "./PaymentRight/RightTop";
import RightFirst from "./PaymentRight/RightFirst";
import RightThird from "./PaymentRight/RightThird";
import RightForth from "./PaymentRight/RightForth";

export default function PaymentInvoiceTab() {
  return (
    <section className="">
      <Tabs defaultIndex={0}>
        <div className="py-5 border-b-[1.017px] border-[#DFE1E6]">
          <TabList>
            <Tab>Invoice</Tab>
            <Tab>History</Tab>
            <Tab>Notes</Tab>
          </TabList>
        </div>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>

      <div className="flex justify-between mt-[22.29px] ">
        <div className="w-[41%]">
          <ButtonTop />
          <LeftFirstPart />
          <LeftSecondPart />
        </div>

        <div className=" bg-[#FFF] p-[29.613px]">
          <div className="pb-[29.61px]">
            <RightTop />
          </div>
          <div>
            <RightFirst />
          </div>
          <div className="mt-[33.84px]">
            <RightThird />
          </div>
          <div className="mt-[116.26px]" >
            <RightForth/>
          </div>
        </div>
      </div>
    </section>
  );
}
