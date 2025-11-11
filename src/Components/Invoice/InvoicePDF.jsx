import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import transitionIcon from '../../assets/transaction-history_9964360.png'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#111827",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2841C5",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 12,
    color: "#6B7280",
  },
  customerInfo: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    backgroundColor: "#F9FAFB",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  label: {
    width: "25%",
    fontWeight: "bold",
    color: "#1E40AF",
  },
  value: {
    width: "75%",
    color: "#111827",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#D1D5DB",
  },
  tableHeader: {
    backgroundColor: "#EEF2FF",
  },
  tableColHeader: {
    width: "20%",
    borderRightWidth: 1,
    padding: 6,
    fontWeight: "bold",
    color: "#2841C5",
    textAlign: "center",
  },
  tableCol: {
    width: "20%",
    borderRightWidth: 1,
    padding: 6,
    textAlign: "center",
  },
  totalSection: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 5,
    backgroundColor: "#EEF2FF",
  },
  totalText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    color: "#1E40AF",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    textAlign: "center",
    color: "#6B7280",
    borderTopWidth: 0.5,
    borderTopColor: "#D1D5DB",
    paddingTop: 8,
  },
});

const InvoicePDF = ({ data }) => {
  const totalAmount = data.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerSection}>
          <Image src={transitionIcon} style={styles.logo} />
          <Text style={styles.headerTitle}>Utility Bill Invoice</Text>
          <Text style={styles.subHeader}>
            Generated on: {new Date().toLocaleDateString()}
          </Text>
        </View>

        {/* Customer Info */}
        <View style={styles.customerInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{data[0].name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{data[0].email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{data[0].phone}</Text>
          </View>
          
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableColHeader}>SL No.</Text>
            <Text style={styles.tableColHeader}>Name</Text>
            <Text style={styles.tableColHeader}>Category</Text>
            <Text style={styles.tableColHeader}>Date</Text>
            <Text style={styles.tableColHeader}>Amount ($)</Text>
          </View>

          {data.map((item, index) => (
            <View style={styles.tableRow} key={item._id}>
              <Text style={styles.tableCol}>{index + 1}</Text>
              <Text style={styles.tableCol}>{item.name}</Text>
              <Text style={styles.tableCol}>{item.category}</Text>
              <Text style={styles.tableCol}>
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "—"}
              </Text>
              <Text style={styles.tableCol}>{item.amount}</Text>
            </View>
          ))}
        </View>

        {/* Total */}
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total Amount: ${totalAmount}</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © {new Date().getFullYear()} Utility Bill Management | Generated
          automatically
        </Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
