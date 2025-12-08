import React from "react";
export default function SalesTable({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Txn ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Region</th>
            <th>Product</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Final Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Employee</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.transactionId}</td>
              <td>{row.date?.slice(0, 10)}</td>
              <td>{row.customerName}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.gender}</td>
              <td>{row.age}</td>
              <td>{row.customerRegion}</td>
              <td>{row.productName}</td>
              <td>{row.productCategory}</td>
              <td>{row.quantity}</td>
              <td>{row.finalAmount}</td>
              <td>{row.paymentMethod}</td>
              <td>{row.orderStatus}</td>
              <td>{row.employeeName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

