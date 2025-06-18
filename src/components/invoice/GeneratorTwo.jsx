import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import the plugin explicitly

const GeneratorTwo = ({
  defaultCurrency = "$",
  companyName = "ABC Tech Solutions",
  companyEmail = "contact@abctech.com",
  initialItems = [
    {
      description: "Website Development Service",
      price: 2000,
      qty: 1,
      amount: 2000,
    },
    {
      description: "Monthly SEO Optimization",
      price: 500,
      qty: 2,
      amount: 1000,
    },
    {
      description: "Cloud Hosting Subscription (Annual)",
      price: 120,
      qty: 12,
      amount: 1440,
    },
  ],
}) => {
  const [items, setItems] = useState(initialItems);
  const [invoiceNumber] = useState("9162238553");
  const [billTo] = useState({
    name: "XYZ Enterprises",
    address: "9876 Oak Avenue, Floor 3\nLos Angeles, CA 90012",
    phone: "(987) 654-3210",
    email: "contact@xyzenterprises.com",
  });

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const discount = 200; // Fixed discount as per the layout
  const shipping = 50; // Fixed shipping as per the layout
  const total = subtotal + tax + shipping - discount;
  const amountPaid = 2000; // Fixed amount paid as per the layout
  const balanceDue = total - amountPaid;

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header Background
    doc.setFillColor(0, 128, 0); // Green background
    doc.rect(0, 0, 210, 30, "F");
    doc.setTextColor(255);
    doc.setFontSize(20);
    doc.text("INVOICE", 160, 20, { align: "right" });

    // Header Details (Date, Invoice No, Due Date)
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text(`Date: Feb 3, 2025`, 140, 40);
    doc.text(`Invoice No: #${invoiceNumber}`, 140, 46);
    doc.text(`Due Date: Feb 18, 2025`, 140, 52);

    // Invoice From
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("INVOICE FROM", 10, 40);
    doc.setFontSize(10);
    doc.text(`${companyName}`, 10, 48);
    doc.text("123 Elm Street, Suite 567", 10, 54);
    doc.text("New York, NY 10001", 10, 60);
    doc.text("Phone: (123) 456-7890", 10, 66);
    doc.text(`Email: ${companyEmail}`, 10, 72);
    doc.text("Website: www.abctech.com", 10, 78);

    // Invoice To
    doc.setFontSize(12);
    doc.text("INVOICE TO", 110, 40);
    doc.setFontSize(10);
    doc.text(`${billTo.name}`, 110, 48);
    doc.text(`${billTo.address}`, 110, 54);
    doc.text(`Phone: ${billTo.phone}`, 110, 66);
    doc.text(`Email: ${billTo.email}`, 110, 72);

    // Line Items Table
    autoTable(doc, {
      startY: 90,
      head: [["Sl", "Description", "Price", "Qty", "Amount"]],
      body: items.map((item, index) => [
        index + 1,
        item.description,
        `${defaultCurrency}${item.price.toFixed(2)}`,
        item.qty,
        `${defaultCurrency}${item.amount.toFixed(2)}`,
      ]),
      theme: "striped",
      headStyles: { fillColor: [0, 128, 0], textColor: 255 },
      styles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 80 },
        2: { cellWidth: 30, halign: "right" },
        3: { cellWidth: 20, halign: "center" },
        4: { cellWidth: 30, halign: "right" },
      },
    });

    // Totals Section
    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(10);
    doc.text(
      `Subtotal: ${defaultCurrency}${subtotal.toFixed(2)}`,
      140,
      finalY + 10
    );
    doc.text(
      `Tax (${taxRate * 100}%): ${defaultCurrency}${tax.toFixed(2)}`,
      140,
      finalY + 16
    );
    doc.text(
      `Discount: ${defaultCurrency}${discount.toFixed(2)}`,
      140,
      finalY + 22
    );
    doc.text(
      `Shipping: ${defaultCurrency}${shipping.toFixed(2)}`,
      140,
      finalY + 28
    );
    doc.text(`Total: ${defaultCurrency}${total.toFixed(2)}`, 140, finalY + 34);
    doc.text(
      `Amount Paid: ${defaultCurrency}${amountPaid.toFixed(2)}`,
      140,
      finalY + 40
    );
    doc.text(
      `Balance Due: ${defaultCurrency}${balanceDue.toFixed(2)}`,
      140,
      finalY + 46
    );

    // Notes
    doc.setFontSize(12);
    doc.text("Notes", 10, finalY + 60);
    doc.setFontSize(10);
    doc.text(
      "Thank you for your business! Please contact us if you have any questions regarding this invoice.",
      10,
      finalY + 68
    );

    // Terms
    doc.setFontSize(12);
    doc.text("Terms", 10, finalY + 80);
    doc.setFontSize(10);
    doc.text(
      "Payment is due within 15 days from the invoice date. Late payments may incur a 5% late fee.",
      10,
      finalY + 88
    );

    // Save the PDF
    doc.save(`invoice_${invoiceNumber}.pdf`);
  };

  return (
    <div className="invoice-generator">
      <h2>Invoice Preview</h2>
      <div className="invoice-details">
        <p>
          <strong>Bill To:</strong> {billTo.name}, {billTo.address}
        </p>
        <p>
          <strong>Invoice #:</strong> {invoiceNumber}
        </p>
        <p>
          <strong>Date:</strong> Feb 3, 2025
        </p>
        <p>
          <strong>Due Date:</strong> Feb 18, 2025
        </p>
      </div>

      <table className="items-table">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>
                {defaultCurrency}
                {item.price.toFixed(2)}
              </td>
              <td>{item.qty}</td>
              <td>
                {defaultCurrency}
                {item.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals">
        <p>
          Subtotal: {defaultCurrency}
          {subtotal.toFixed(2)}
        </p>
        <p>
          Tax ({taxRate * 100}%): {defaultCurrency}
          {tax.toFixed(2)}
        </p>
        <p>
          Discount: {defaultCurrency}
          {discount.toFixed(2)}
        </p>
        <p>
          Shipping: {defaultCurrency}
          {shipping.toFixed(2)}
        </p>
        <p>
          <strong>
            Total: {defaultCurrency}
            {total.toFixed(2)}
          </strong>
        </p>
        <p>
          Amount Paid: {defaultCurrency}
          {amountPaid.toFixed(2)}
        </p>
        <p>
          <strong>
            Balance Due: {defaultCurrency}
            {balanceDue.toFixed(2)}
          </strong>
        </p>
      </div>

      <button onClick={generatePDF}>Download PDF</button>

      <style jsx>{`
        .invoice-generator {
          max-width: 800px;
          margin: 20px auto;
          font-family: Arial, sans-serif;
        }
        .invoice-details {
          margin-bottom: 20px;
        }
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .items-table th,
        .items-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .items-table th {
          background-color: #f2f2f2;
        }
        .totals {
          text-align: right;
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          background-color: #008000;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #00a000;
        }
      `}</style>
    </div>
  );
};

export default GeneratorTwo;
