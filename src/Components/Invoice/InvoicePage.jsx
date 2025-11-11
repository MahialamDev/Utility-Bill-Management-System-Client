import React from 'react';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

const invoices = [
  { id: 1, title: "Electricity Bill", category: "Electricity", date: "2025-11-01", amount: 1250 },
  { id: 2, title: "Water Bill", category: "Water", date: "2025-11-03", amount: 500 },
  { id: 3, title: "Gas Bill", category: "Gas", date: "2025-11-05", amount: 750 },
  { id: 4, title: "Internet Bill", category: "Internet", date: "2025-11-07", amount: 1000 },
  { id: 5, title: "Maintenance Fee", category: "Maintenance", date: "2025-11-09", amount: 300 }
];

const InvoicePage = () => {

  const openPDFPreview = async () => {
    const blob = await pdf(<InvoicePDF data={invoices} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank'); // open in new tab
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Invoice</h1>

      <button
        onClick={openPDFPreview}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1E40AF',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer'
        }}
      >
        Preview Invoice
      </button>
    </div>
  );
};

export default InvoicePage;
 