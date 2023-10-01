// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props

  return (
    <div className="balance-checking-card-container">
      <div className="balance-card">
        <img
          className="balance-checking-img"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="amount-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">RS {balanceAmount}</p>
        </div>
      </div>
      <div className="income-card">
        <img
          className="balance-checking-img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="amount-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">RS {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          className="balance-checking-img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="amount-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">RS {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
