import React, { useState } from "react";
import PaymentInvoiceTab from "./Invoice/PaymentInvoice/PaymentInvoiceTab";
import ReconcileHeader from "./Reconcile/ReconcileHeader";

export default function AccManagementInvoice() {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <section className="pr-5 mb-[30.6px] ">
        <header>
          <ReconcileHeader tabIndex={tabIndex} />
        </header>

        <PaymentInvoiceTab />
      </section>
    </>
  );
}
