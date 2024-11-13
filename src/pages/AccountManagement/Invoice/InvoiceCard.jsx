import img1 from "../../../assets/accountsAssests/octicon_people-16.svg";
import img2 from "../../../assets/accountsAssests/octicon_people-1-36.svg";
import img3 from "../../../assets/accountsAssests/octicon_people-16 (1).svg";
import img4 from "../../../assets/accountsAssests/octicon_people-16 (2).svg";
import img5 from "../../../assets/accountsAssests/iconoir_arrow-bl (1).svg";
import img6 from "../../../assets/accountsAssests/iconoir_arrow-bl.svg"

const invoiceCardsData = [
  {
    title:'All',
    count:'80',
    img: img1,
    price:'$500k',
    percentage: '12 %',    
    arrow:img6
  },
  {
    title:'Draft',
    count:'12',
    img: img2,
    price:'2.70k',
    percentage: '55 %',               
    arrow:img6
  },
  {
    title:'Overdue',
    count:'10',
    img: img3,
    price:'5.5k',
    percentage: '80 %',               
    arrow:img5
  },
  {
    title:'Paid',
    count:'0',
    img: img4,
    price:'75',
    percentage: '8 %',               
    arrow:img5
  }

]



export default function InvoiceCard() {
  return (
    <>
      <section className="flex items-center  justify-between gap-[20px] my-[21px]">
        {
          invoiceCardsData?.map((data, idx) => (
            <div key={idx} className="bg-[#FFF] flex-1 rounded-[16px] py-[24px] pl-[27px] pr-[28.5px] space-y-3  ">
          <h2 className="text-base font-semibold text-[#242628]">
            {data.title} <span className="text-[#FF3A00]">({data.count})</span>
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3" >
            <img src={data.img} alt="" />
            <h2 className="font-semibold text-[28px]">{data.price}</h2>
            </div>
            <button className="flex items-center gap-[2px]">
              <span className={`font-medium  text-[10px] ${(idx === 0 && 'text-[#15994E]') || (idx === 1 && 'text-[#15994E]') || (idx === 2 && 'text-[#FF3A00]') || (idx === 3 && 'text-[#FF3A00]') } -tracking-[0.6px]`}>{data.percentage}</span>
             <img src={data.arrow} alt="" />
            </button>
          </div>
        </div>
          ))
        }
      </section>
    </>
  );
}
