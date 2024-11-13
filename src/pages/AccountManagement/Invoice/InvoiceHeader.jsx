

const InvoiceHeader = () => {
    return (
        <div className="flex items-center justify-between">
        <div className="bg-red-100 text-red-700 font-semibold py-1 px-3 rounded-full text-sm">
          Pending
        </div>
        <div className="text-orange-600 font-medium text-sm">18 Days Delay</div>
      </div>
    );
  };
  
  export default InvoiceHeader;
  