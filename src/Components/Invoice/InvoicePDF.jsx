import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#1E40AF' },
  table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1 },
  tableColHeader: { width: '25%', borderRightWidth: 1, fontWeight: 'bold', padding: 5 },
  tableCol: { width: '25%', borderRightWidth: 1, padding: 5 },
  total: { marginTop: 10, fontSize: 14, textAlign: 'right', fontWeight: 'bold' }
});

const InvoicePDF = ({ data }) => {
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Title</Text>
            <Text style={styles.tableColHeader}>Category</Text>
            <Text style={styles.tableColHeader}>Date</Text>
            <Text style={styles.tableColHeader}>Amount</Text>
          </View>

          {data.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.tableCol}>{item.title}</Text>
              <Text style={styles.tableCol}>{item.category}</Text>
              <Text style={styles.tableCol}>{item.date}</Text>
              <Text style={styles.tableCol}>{item.amount}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>Total: {totalAmount}</Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
