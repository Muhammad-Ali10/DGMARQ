import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { Base_url } from '../../../utils/Base_url';

const PayPalCheckout = ({ orderData, onSuccess }) => {
  const createOrder = async () => {
    const response = await axios.post(`${Base_url}/paypal/create-order`, {
      totalPrice: orderData.totalPrice,
    });
    return response.data.id;
  };

  const onApprove = async (data) => {
    const capture = await axios.post(`${Base_url}/paypal/capture-order/${data.orderID}`);
    if (capture?.data?.status === 'COMPLETED') {
      await axios.post(`${Base_url}/checkout/create`, orderData);
      onSuccess();
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={(err) => console.error('PayPal Error:', err)}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;