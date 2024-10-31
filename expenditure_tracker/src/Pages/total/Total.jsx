import React, { useState, useEffect } from "react";
import "./total.css";
import { Link } from "react-router-dom";
import boy from "../../Icons/totalExpenditure.png";
import chart from "../../Icons/initialbalance.png";
import wallet from "../../Icons/wallet.png";
import recommendor from "../../Icons/recomendation.png";
import rightarrow from "../../Icons/Arrow_right.png";
import TopNavbar from "../../Components/ui/TopNavBar";
import NavBar from "../../Components/ui/NavBar";
function Total(props) {
 // Set initial state with default values
 const [totalExpenditure, setTotalExpenditure] = useState("0");
 const [mostSpentCategory, setMostSpentCategory] = useState("none");
 const [initialBudget, setInitialBudget] = useState("0");
 const [amountLeft, setAmountLeft] = useState("0");

 // Update state when props change
 useEffect(() => {
   if (props.totalExpenditure) setTotalExpenditure(props.totalExpenditure);
   if (props.mostSpentCategory) setMostSpentCategory(props.mostSpentCategory);
   if (props.initialBudget) setInitialBudget(props.initialBudget);
   if (props.amountLeft) setAmountLeft(props.amountLeft);
 }, [props]);
  return (<div>
    <TopNavbar />
    <div className="Total-container">
     
      {/* Analysis section containing expenditure and accounting details */}
      <div className="analiysis">
        {/* Total expenditure block */}
        <div className="total-expenditure">
          <img src={boy} alt="Boy icon" className="boy" />
          <p>
            <h2>Total Expenditures</h2> <br />
            XFA {totalExpenditure}<br />
            You spent most of your money on <br />
            {mostSpentCategory}.
            Consider reducing your spendings <br />
            to increase savings.
          </p>
        </div>
        {/* Accounting flex box for budget and amount left */}
        <div className="acounting-flex">
          <div className="initial-budget">
            <img src={chart} alt="Chart icon" className="chart" />
            <h2>
              Initial Budget
              <br /> <p>XFA {initialBudget}</p>
            </h2>
          </div>
          <div className="amount-left">
            <img src={wallet} alt="Wallet icon" className="wallet" />
            <h2>You are left with XFA {amountLeft}</h2>
          </div>
        </div>
      </div>
      {/* Recommendation section */}
      <div className="recommendation">
        <img src={recommendor} alt="Recommendor icon" className="recommended" />
        <p>
          <h3>Tips on Balance Spending</h3>
          <Link to="/your-path">
            <img
              src={rightarrow}
              className="double-right-arrow"
              alt="Double right arrow"
            />
          </Link>
        </p>
      </div>
    </div>
    {/* bottom nav bar */}
    <NavBar /> 
    </div>
  );
}

export default Total;