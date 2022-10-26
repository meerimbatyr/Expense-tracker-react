import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  const { text, amount } = transaction;
  const sign = amount > 0 ? "+" : "-";
  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>
        {sign}
        {moneyFormatter(amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
