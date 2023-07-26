import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useSelector } from "react-redux";
import "./OrderHistoryPage.css";

export const OrderHistoryPage = () => {
  const orderhistorydata = useSelector((state) => state.orderhistorydata);
  const data = orderhistorydata.orders.map((order, index) => {
    return {
      id: index + 1,
      date: order.orderdate,
      totalAmount: order.totalamount,
      discount: order.totaldiscount,
      deliveryDetails: order.deliverydetails,
      items: order.items.map((item) => {
        return {
          id: item.uri,
          title: item.label,
          price: item.price,
          quantity: item.quantity,
        };
      }),
    };
  });

  return (
    <div className="order-history">
      <h2>Order History</h2>

      <Table className="order-table">
        <Thead key="header">
          <Tr>
            <Th>Order #</Th>
            <Th>Date</Th>
            <Th>Total Amount</Th>
            <Th>Discount</Th>
            <Th>Delivery Details</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>

        <Tbody key="body">
          {data.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.date}</Td>
              <Td>{order.totalAmount}</Td>
              <Td>{order.discount}</Td>
              <Td>
                <p>Name: {order.deliveryDetails.name}</p>
                <p>Address: {order.deliveryDetails.address}</p>
              </Td>
              <Td>
                {order.items.map((item) => (
                  <p key={item.id}>
                    {item.title} - {item.price} x {item.quantity}
                  </p>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};
