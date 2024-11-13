

export default function LoadHeader() {
   
    return (
        <>
          <div className="flex justify-between items-center my-5">
            {/* left side -- */}
            <h2 className="text-2xl font-semibold text-textColor tracking-[0.48px]">
            Load List
            </h2>
    
            {/* right side  -- */}
    
            <div className="flex items-center gap-4">
             
              {/* btn 1-- */}
              <button className="px-6 py-3 flex items-center gap-1 bg-[#FE4711] rounded-xl text-white">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 13.498H11.5V18.498C11.5 18.7633 11.3946 19.0176 11.2071 19.2052C11.0196 19.3927 10.7652 19.498 10.5 19.498C10.2348 19.498 9.98043 19.3927 9.79289 19.2052C9.60536 19.0176 9.5 18.7633 9.5 18.498V13.498H4.5C4.23478 13.498 3.98043 13.3927 3.79289 13.2052C3.60536 13.0176 3.5 12.7633 3.5 12.498C3.5 12.2328 3.60536 11.9785 3.79289 11.7909C3.98043 11.6034 4.23478 11.498 4.5 11.498H9.5V6.49805C9.5 6.23283 9.60536 5.97848 9.79289 5.79094C9.98043 5.6034 10.2348 5.49805 10.5 5.49805C10.7652 5.49805 11.0196 5.6034 11.2071 5.79094C11.3946 5.97848 11.5 6.23283 11.5 6.49805V11.498H16.5C16.7652 11.498 17.0196 11.6034 17.2071 11.7909C17.3946 11.9785 17.5 12.2328 17.5 12.498C17.5 12.7633 17.3946 13.0176 17.2071 13.2052C17.0196 13.3927 16.7652 13.498 16.5 13.498Z"
                    fill="white"
                  />
                </svg>
    
                New Load
              </button>
    
              {/* btn 2 -- */}
    
              <button className="px-6 py-3 flex items-center gap-1 rounded-xl border border-[#3C3E42] text-textColor">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1999 13.3C18.9878 13.3 18.7843 13.3842 18.6342 13.5343C18.4842 13.6843 18.3999 13.8878 18.3999 14.1V16.4999C18.3999 17.1365 18.1471 17.7469 17.697 18.197C17.2469 18.6471 16.6365 18.8999 15.9999 18.8999H7.99998C7.36346 18.8999 6.75302 18.6471 6.30293 18.197C5.85285 17.7469 5.59999 17.1365 5.59999 16.4999V8.49998C5.59999 7.86346 5.85285 7.25302 6.30293 6.80293C6.75302 6.35285 7.36346 6.09999 7.99998 6.09999H12C12.2121 6.09999 12.4156 6.01571 12.5656 5.86568C12.7157 5.71565 12.8 5.51217 12.8 5.3C12.8 5.08782 12.7157 4.88434 12.5656 4.73431C12.4156 4.58429 12.2121 4.5 12 4.5H7.99998C6.93951 4.50127 5.92284 4.9231 5.17297 5.67297C4.4231 6.42284 4.00127 7.43951 4 8.49998V16.4999C4.00127 17.5604 4.4231 18.5771 5.17297 19.327C5.92284 20.0768 6.93951 20.4987 7.99998 20.4999H15.9999C17.0604 20.4987 18.0771 20.0768 18.827 19.327C19.5768 18.5771 19.9987 17.5604 19.9999 16.4999V14.1C19.9999 13.8878 19.9156 13.6843 19.7656 13.5343C19.6156 13.3842 19.4121 13.3 19.1999 13.3Z"
                    fill="#3A3C3F"
                  />
                  <path
                    d="M8.00791 13.4137C8.03214 13.5824 8.10962 13.7389 8.22906 13.8605C8.3485 13.9821 8.50365 14.0624 8.67191 14.0897C8.71421 14.0967 8.75702 14.1001 8.79991 14.1001C8.94857 14.1001 9.09431 14.0588 9.22078 13.9806C9.34725 13.9025 9.44945 13.7906 9.5159 13.6577C10.5087 11.6713 13.1503 11.5521 14.3999 11.6265V13.3001C14.3999 13.4583 14.4468 13.6129 14.5348 13.7444C14.6227 13.876 14.7476 13.9785 14.8938 14.039C15.0399 14.0995 15.2007 14.1154 15.3559 14.0845C15.5111 14.0537 15.6536 13.9775 15.7655 13.8657L19.7655 9.86568C19.845 9.78615 19.9069 9.69072 19.9471 9.58563C19.9873 9.48055 20.0049 9.36816 19.9987 9.25582C19.9925 9.14348 19.9627 9.03371 19.9112 8.93368C19.8597 8.83364 19.7877 8.7456 19.6999 8.67529L15.6999 5.4753C15.5822 5.38109 15.4403 5.32204 15.2905 5.30496C15.1407 5.28788 14.9892 5.31346 14.8533 5.37876C14.7175 5.44406 14.6028 5.54642 14.5226 5.67404C14.4424 5.80166 14.3998 5.94936 14.3999 6.1001V7.63449C12.1599 7.52969 10.4479 8.06249 9.3271 9.21769C8.82403 9.78469 8.44645 10.4516 8.21911 11.1747C7.99177 11.8978 7.91979 12.6608 8.00791 13.4137Z"
                    fill="#3A3C3F"
                  />
                </svg>
    
                <span>Export</span>
              </button>
              
    
             
            </div>
          </div>
        </>
      );
}
