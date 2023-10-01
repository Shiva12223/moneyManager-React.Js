// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionItemDetails

  const deleteTransactionItem = () => {
    deleteTransaction(id)
  }

  return (
    <li className="each-transaction-container">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div className="delete-button-container">
        <button
          type="button"
          className="delete-btn"
          onClick={deleteTransactionItem}
          data-testid="delete"
        >
          <img
            className="delete-btn-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
