import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const GeneratorThree = () => {
  const generateInvoice = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(22);
    doc.text("INVOICE", 15, 20);

    // Date, Invoice No, Due Date
    doc.setFontSize(10);
    doc.text(`Date: Feb 3, 2025`, 15, 30);
    doc.text(`Invoice No: #9162238553`, 80, 30);
    doc.text(`Due Date: Feb 18, 2025`, 160, 30);

    // Company Details (left)
    doc.setFontSize(12);
    doc.text("Your Company Details", 15, 45);
    doc.setFontSize(10);
    doc.text(
      [
        "ABC Tech Solutions",
        "123 Elm Street, Suite 567",
        "New York, NY 10001",
        "Phone: (123) 456-7890",
        "Email: contact@abctech.com",
        "Website: www.abctech.com",
      ],
      15,
      52
    );

    // Invoice To (right)
    doc.setFontSize(12);
    doc.text("Invoice To", 145, 45);
    doc.setFontSize(10);
    doc.text(
      [
        "XYZ Enterprises",
        "9876 Oak Avenue, Floor 3",
        "Los Angeles, CA 90012",
        "Phone: (987) 654-3210",
        "Email: contact@xyzenterprises.com",
      ],
      145,
      52
    );

    // Table
    autoTable(doc, {
      startY: 95,
      head: [["SL", "Description", "Price", "Qty", "Amount"]],
      body: [
        ["1", "Website Development Service", "$2000", "1", "$2000.00"],
        ["2", "Monthly SEO Optimization", "$500", "2", "$1000.00"],
        ["3", "Cloud Hosting Subscription (Annual)", "$120", "12", "$1440.00"],
      ],
      styles: { fontSize: 10 },
      headStyles: { fillColor: [230, 230, 230] },
    });

    const summaryStartY = doc.lastAutoTable.finalY + 10;

    // Financial summary
    doc.text(`Subtotal: $4440.00`, 145, summaryStartY);
    doc.text(`Tax (10%): $424.00`, 145, summaryStartY + 6);
    doc.text(`Discount: $200.00`, 145, summaryStartY + 12);
    doc.text(`Shipping: $50.00`, 145, summaryStartY + 18);

    doc.setFont("helvetica", "bold");
    doc.text(`Total: $4714.00`, 145, summaryStartY + 28);
    doc.text(`Amount Paid: $2000.00`, 145, summaryStartY + 34);

    doc.setTextColor(255, 0, 0);
    doc.text(`Balance Due: $2714.00`, 145, summaryStartY + 42);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");

    // Notes
    doc.setFontSize(12);
    doc.text("Notes", 15, summaryStartY);
    doc.setFontSize(10);
    doc.text(
      "Thank you for your business! Please contact us if you have any questions regarding this invoice.",
      15,
      summaryStartY + 6
    );

    // Terms
    doc.setFontSize(12);
    doc.text("Terms", 15, summaryStartY + 20);
    doc.setFontSize(10);
    doc.text(
      "Payment is due within 15 days from the invoice date. Late payments may incur a 5% late fee.",
      15,
      summaryStartY + 26
    );

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={generateInvoice}
        style={{
          backgroundColor: "#4F46E5",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Generate Invoice PDF
      </button>
    </div>
  );
};

export default GeneratorThree;
