import React from 'react';
import './Dashboard_Styles/tablechart.css'; // Import the CSS file for styling

export default function CustomerOrderTable() {
  const orders = [
    { profile: "Kalisa", address: "Gasabo", date: "20.05.2020", status: "Received", price: "$100" },
    { profile: "Wera", address: "Kicukiro", date: "28.05.2020", status: "In a process", price: "$200" },
    { profile: "Peter", address: "Unknown", date: "10.05.2020", status: "Cancelled", price: "$300" },
    { profile: "Paul", address: "Nyarugenge", date: "09.05.2020", status: "Received", price: "$400" },
  ];

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={`row-${index % 3}`}>
              <td>{order.profile}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
 </div>
);
}