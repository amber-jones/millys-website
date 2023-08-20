"use client";

import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Char Siu Bao Buns', maxOrder: 5 },
  { id: 2, name: 'Chicken Chow Main', maxOrder: 3 },
  { id: 3, name: 'Beef Chow Main', maxOrder: 10 },
  { id: 4, name: 'Bow Ties', maxOrder: 10 },
];

const ItemOrder = ({ item, onChange, removeOrder, index, showRemove }) => (
  <div>
    <select value={item} onChange={(e) => onChange(e.target.value, 'item', index)}>
      <option value="">Select an item</option>
      {menuItems.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
    </select>
    <input
      type="number"
      min="1"
      max={menuItems.find(i => i.name === item)?.maxOrder || 5}
      onChange={(e) => onChange(e.target.value, 'quantity', index)}
    />
    {showRemove && <button onClick={() => removeOrder(index)}>Remove</button>}
  </div>
);

export default function OrderForm() {
  const [orders, setOrders] = useState([{ item: '', quantity: 1 }]);
  const [customer, setCustomer] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  });

  const handleOrderChange = (value, type, index) => {
    const newOrders = [...orders];
    if (type === 'item') newOrders[index].item = value;
    if (type === 'quantity') newOrders[index].quantity = Number(value);
    setOrders(newOrders);
  };

  const removeOrder = (indexToRemove) => {
    const newOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(newOrders);
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddItem = () => {
    setOrders([...orders, { item: '', quantity: 1 }]);
  };

  const handleSubmit = () => {
    console.log({
      customer,
      orders,
    });
  };

  return (
    <div className='z-50'>
      <h3>Customer Details:</h3>
      <div>
        <input name="name" placeholder="Name" onChange={handleCustomerChange} />
        <input name="surname" placeholder="Surname" onChange={handleCustomerChange} />
        <input name="email" placeholder="Email" onChange={handleCustomerChange} />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleCustomerChange} />
      </div>

      <h3>Order:</h3>
      {orders.map((order, index) => (
        <ItemOrder 
          key={index}
          index={index}
          item={order.item}
          onChange={handleOrderChange}
          removeOrder={removeOrder}
          showRemove={orders.length > 1}
        />
      ))}
      <button className='mx-auto p-3 mt-5 w-32 text-center border-2 border-black font-heading' onClick={handleAddItem}>Add</button>

      <div className='receipt bg-white mt-5'>
        <div className='receipt-wrapper p-10'>
          <h3 className='text-5xl font-heading text-center text-red'>Your Order</h3>
          <ul>
            {orders.map((order, index) => (
              <>
                {order.item && <li className='border-b border-[#ccc] pb-3 mb-3' key={index}>{order.item} x {order.quantity}</li>}
              </>
            ))}
          </ul>
          <button className='mx-auto p-3 mt-5 w-32 text-center border-4 border-black border-double font-heading' onClick={handleSubmit}>Place Order</button>
        </div>
      </div>

      
  
    </div>
  );
}
