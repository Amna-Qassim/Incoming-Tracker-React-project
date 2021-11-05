import React from 'react';

function IncomeItem({ income, index, removeIncome }) {

  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandel = i => {
    removeIncome(i);
  }
  return (
    <div className="income-item">
      <button className="remove-item" onClick={ () => removeHandel(index)} > x </button>
      <div className="desc">{income.desc}</div>
      <div className="price">£{income.price}</div>
      <div className="date">{ day + "/" + month + "/" + year }</div>

    </div>
  )
}

export default IncomeItem;
