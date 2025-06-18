import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import the plugin explicitly

const GeneratorOne = ({
  defaultCurrency = "$",
  companyName = "Your Company",
  companyEmail = "info@example.com",
  initialItems = [
    {
      item: "Widget",
      description: "High-quality widget",
      qty: 2,
      price: 10,
      total: 20,
    },
    {
      item: "Gadget",
      description: "Premium gadget",
      qty: 1,
      price: 15,
      total: 15,
    },
  ],
}) => {
  const [items, setItems] = useState(initialItems);
  const [invoiceNumber] = useState("123"); // Could be dynamic via props or input
  const [billTo] = useState({
    name: "Jane Doe",
    address: "456 Elm St\nCity, ST 67890",
  });

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFillColor(41, 128, 185);
    doc.rect(0, 0, 210, 30, "F");
    doc.setTextColor(255);
    doc.setFontSize(16);
    doc.text("INVOICE", 10, 20);

    // Billing Info
    doc.setTextColor(0);
    doc.setFontSize(10);
    doc.text(`Bill To:\n${billTo.name}\n${billTo.address}`, 10, 40);
    doc.text(
      `Invoice #: ${invoiceNumber}\nDate: ${new Date().toLocaleDateString()}`,
      140,
      40
    );

    autoTable(doc, {
      startY: 80,
      head: [["Item", "Description", "Qty", "Price", "Total"]],
      body: items.map((item) => [
        item.item,
        item.description,
        item.qty,
        `${defaultCurrency}${item.price.toFixed(2)}`,
        `${defaultCurrency}${item.total.toFixed(2)}`,
      ]),
      theme: "striped",
    });

    // Totals Table
    const finalY = doc.lastAutoTable.finalY;
    autoTable(doc, {
      startY: finalY + 10,
      body: [
        ["Subtotal", `${defaultCurrency}${subtotal.toFixed(2)}`],
        [`Tax (${taxRate * 100}%)`, `${defaultCurrency}${tax.toFixed(2)}`],
        ["Grand Total", `${defaultCurrency}${grandTotal.toFixed(2)}`],
      ],
      styles: { fontSize: 12 },
      columnStyles: { 1: { halign: "right" } },
    });

    // Footer
    doc.setFontSize(8);
    doc.text(`Thank you for your business! | ${companyEmail}`, 10, 280);

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
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>

      <table className="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>
                {defaultCurrency}
                {item.price.toFixed(2)}
              </td>
              <td>
                {defaultCurrency}
                {item.total.toFixed(2)}
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
          <strong>
            Grand Total: {defaultCurrency}
            {grandTotal.toFixed(2)}
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
          background-color: #2980b9;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default GeneratorOne;
