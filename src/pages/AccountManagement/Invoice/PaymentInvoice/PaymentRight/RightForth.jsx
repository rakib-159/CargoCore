

export default function RightForth() {
  return (
   <>
    <div className="flex flex-col justify-between gap-[70px]  min-h-full ">
            <div className="flex justify-between gap-[74.4px] items-start w-full">
                <div className="flex-1 ">
                    <h3 className="uppercase text-[7.615px] text-[#101011] font-semibold">Notes</h3>
                    <p className="text-[7.615px] text-[#484B4E] leading-[11.845px]">February invoice for ocean freight and associated <br /> services provided.</p>
                </div>
                <div className="text-[7.615px] w-[38%]   leading-[11.845px]">
                    <div className="flex justify-between items-center uppercase">
                        <p className="text-[#101011] font-semibold">subtotal</p>
                        <p className="font-normal">$400 USD</p>
                    </div>
                    <div className="flex justify-between items-center uppercase">
                        <p className="text-[#101011] font-semibold">Discount (10%)</p>
                        <p className="font-normal">$400 USD</p>
                    </div>
                    <div className="flex justify-between items-center uppercase">
                        <p className="text-[#101011] font-semibold">Tax (20%)</p>
                        <p className="font-normal">$400 USD</p>
                    </div>
                    <div className="text-end uppercase mt-[12.69px]">
                        <p>FINAL AMOUNT</p>
                        <h5 className="text-[15.229px] leading-[18.614px] text-[#FF451C] font-semibold">$400 USD</h5>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-[7.61px] text-[7.615px] leading-[11.845px]">
                <div>
                    <h1 className="text-[#101011] uppercase font-semibold">PAYMENT INFORMATION</h1>
                    <p className="text-[#101011] uppercase font-semibold">Account details</p>
                    <p className="font-normal text-[#484B4E]">Account holder: Maritime Shipping Co.</p>
                    <p className="font-normal text-[#484B4E]">Account number: 920002357882367</p>
                </div>
                <div>
                    <p className="text-[#101011] uppercase font-semibold">Account details</p>
                    <p className="font-normal text-[#484B4E]">20 S. Harbor Street, Fifth Floor</p>
                    <p className="font-normal text-[#484B4E]">Ocean City, Ocean 45678</p>
                    <p className="font-normal text-[#484B4E]">United States</p>
                </div>
                <div>
                    <p className="text-[#101011] uppercase font-semibold">Account details</p>
                    <p className="font-normal text-[#484B4E]">quiries@maritimeshipping.com</p>
                </div>
            </div>
        </div>
   </>
  )
}
