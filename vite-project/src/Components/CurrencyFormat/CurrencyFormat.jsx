import React from "react";

function CurrencyFormat({ amount }) {
  return (
    <p className="font-semibold text-green-600">
      ${Number(amount).toFixed(2)}
    </p>
  );
}

export default CurrencyFormat;

