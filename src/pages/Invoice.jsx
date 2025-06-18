import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import the plugin explicitly
import GeneratorOne from "../components/invoice/GeneratorOne";
import GeneratorTwo from "../components/invoice/GeneratorTwo";
import GeneratorThree from "../components/invoice/GeneratorThree";

const InvoiceGenerator = () => {
  return (
    <div>
      {/* <GeneratorOne /> */}
      {/* <GeneratorTwo /> */}
      <GeneratorThree />
    </div>
  );
};
export default InvoiceGenerator;
