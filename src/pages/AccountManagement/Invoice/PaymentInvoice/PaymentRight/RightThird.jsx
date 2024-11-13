
const detailsTable = [
    {
        first: 'Ocean Freight Transport',
        second: '15 Containers',
        third: '$ 220 USD',
        forth: '5%',
        fifth: '$ 3300 USD'
    },
    {
        first: 'Customs Clearance Fee',
        second: '1 Shipment',
        third: '$ 150 USD',
        forth: '5%',
        fifth: '$ 150 USD'
    },
    {
        first: 'Marine Cargo Insurance',
        second: '15 Containers',
        third: '$ 30 USD',
        forth: '5%',
        fifth: '$ 450 USD'
    },
    {
        first: 'Port Handling Charges',
        second: '1 Shipment',
        third: '$ 500 USD',
        forth: '5%',
        fifth: '$ 500 USD'
    }
]

export default function RightThird() {
  return (
    <section className="space-y-[6.77px]" >
      {/* row 1-- */}
      <div className="text-[#101011] px-[8.46px] grid grid-cols-3 tracking-[0.076px] text-[7.615px] font-semibold">
        <h4 className="" >DESCRIPTION</h4>
        <div className="flex   items-center  gap-[12.69px]">
          <h4 className="min-w-[50.765px]" >QUANTITY</h4>
          <h4 className="min-w-[50.765px]" >RATE</h4>
          <h4>TAX</h4>
        </div>
        <h4 className="text-end" >TOTAL</h4>
      </div>
      {/* row 2-- */}
      {
        detailsTable?.map((data, idx) => (
            <div key={idx} style={{background:'rgba(209, 217, 218, 0.20)'}} className=" px-[8.46px] rounded-[3.384px] grid grid-cols-3 py-[5.08px]  " >
        <h4 className="text-[#101011] min-w-[33.33%] tracking-[0.076px] font-semibold text-[7.615px]" >{data.first}</h4>
       <div className="flex  items-center  gap-[12.69px] text-[#101011] tracking-[0.076px] font-normal text-[7.615px]" >
       <h4 className="min-w-[50.765px]">{data.second}</h4>
        <h4 className="min-w-[50.765px]">{data.third}</h4>
        <h4>
        {data.forth}
        </h4>
       </div>
        <h4 className="text-[#101011] text-end  tracking-[0.076px] font-semibold text-[7.615px]" >{data.fifth}</h4>
      </div>
        ))
      }
      
    
    </section>
  );
}
