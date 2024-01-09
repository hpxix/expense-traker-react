import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const isExpense = transaction.amount < 0;
  const sign = isExpense ? '-' : '+';
  const formattedAmount = `$${Math.abs(transaction.amount).toFixed(2)}`;

  return (
    <li className={isExpense ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{formattedAmount}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};
