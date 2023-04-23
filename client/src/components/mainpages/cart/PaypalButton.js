import { PayPalButton } from "react-paypal-button-v2";

import React from "react"
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

function PaypalButton() {
  const handlePayPalPaymentSuccess = (details, data) => {
    alert("El pago se ha completado con éxito.");
    console.log(details);
  };

  return (
    <div className="App">
      <h1>Botón de PayPal</h1>
      <PayPalButton
        amount="10.00"
        currency="USD"
        onSuccess={handlePayPalPaymentSuccess}
        onError={(error) => console.log(error)}
        options={{
          clientId: "sk_test_51MjomMAjoSfdqrT69xHrE7fj8THbUMszBH2aJjL0hrmNTocTx243G17etUiXJWGx9fwSBmBPIbmZ65BpICNlvA5L002c6AV7Yo",
          currency: "USD",
        }}
      />
    </div>
  );
}

export default PaypalButton;
