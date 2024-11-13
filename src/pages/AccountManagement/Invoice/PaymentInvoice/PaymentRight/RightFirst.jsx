

export default function RightFirst() {
  return (
    <section className="grid grid-cols-3" >

        {/* 1st part --- */}
            <div>
                  <p className="text-[7.615px] text-[#FF451C] uppercase font-semibold" >FROM</p>

                  <h5 className="text-[#101011] text-[7.618px] font-semibold tracking-[0.076px]"  >Maritime Shipping Co.</h5>
                  <p className="text-[#484B4E] tracking-[0.076px] text-[7.618px] font-normal" >123 Harbor Way <br />
                  Port City, Ocean 45678</p>

                  <p className="text-[#484B4E] tracking-[0.076px] mt-[6.77px] text-[7.618px] font-normal" >VAT Number: 567 3252 20</p>
            </div>
            {/* 2nd part  */}
            <div>
                  <p className="text-[7.615px] text-[#FF451C] uppercase font-semibold" >TO</p>

                  <h5 className="text-[#101011] text-[7.618px] font-semibold tracking-[0.076px]"  >Global Importers LLC</h5>
                  <p className="text-[#484B4E] tracking-[0.076px] text-[7.618px] font-normal" >6789 Import Lane <br/>
                  Trade Town, Commerce 98765</p>

                  <p className="text-[#484B4E] tracking-[0.076px] mt-[6.77px] text-[7.618px] font-normal" >EIN Number: 22-2143333</p>
            </div>

            {/* 3rd part -- */}
            <div className="flex items-center justify-between" >
                <ul className="text-[#101011] space-y-[0.85px] tracking-[0.076px] text-[7.615px] font-semibold" >
                    <li>Payment method:</li>
                    <li>Completion date:</li>
                    <li>Issue date:</li>
                    <li>Due date:</li>
                </ul>
                <ul className="text-[#484B4E] text-center space-y-[0.85px] tracking-[0.076px] text-[7.615px] font-normal" >
                    <li>Wire Transfer</li>
                    <li>01.16.2023.</li>
                    <li>01.16.2023.</li>
                    <li>01.24.2023.</li>
                </ul>
            </div>
    </section>
  )
}
