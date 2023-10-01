import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    newHistoryItemList: [],
  }

  isAmountIsAdded = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )

    const {displayText} = typeOption

    const newHistoryItem = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      newHistoryItemList: [...prevState.newHistoryItemList, newHistoryItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {newHistoryItemList} = this.state
    const filteredTransactionList = newHistoryItemList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({newHistoryItemList: filteredTransactionList})
  }

  getBalance = () => {
    const {newHistoryItemList} = this.state
    let incomeAmount = 0
    let expensesAmount = 0
    let balanceAmount = 0

    newHistoryItemList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {newHistoryItemList} = this.state
    let incomeAmount = 0

    newHistoryItemList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpenses = () => {
    const {newHistoryItemList} = this.state
    let expensesAmount = 0

    newHistoryItemList.forEach(eachTransactionItem => {
      if (eachTransactionItem.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransactionItem.amount
      }
    })

    return expensesAmount
  }

  onChangeUserTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeUserAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {titleInput, amountInput, optionId, newHistoryItemList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="user-money-manager-card">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="tag-line">
            Welcome back to your
            <span className="tag-title">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          expensesAmount={expensesAmount}
          incomeAmount={incomeAmount}
        />

        <div className="addTransaction-history-container">
          <form onSubmit={this.isAmountIsAdded} className="form-container">
            <h1 className="container-heading">Add Transaction</h1>
            <div className="input-container">
              <label className="title" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                className="user-input"
                placeholder="TITLE"
                onChange={this.onChangeUserTitle}
                value={titleInput}
              />
            </div>
            <div className="input-container">
              <label className="title" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="user-input"
                id="amount"
                type="text"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeUserAmount}
              />
            </div>
            <div className="input-container">
              <label className="title" htmlFor="select">
                TYPE
              </label>
              <select
                onChange={this.onChangeOption}
                value={optionId}
                className="type-user-input"
                id="select"
              >
                {transactionTypeOptions.map(eachType => (
                  <option
                    className="option"
                    value={eachType.optionId}
                    key={eachType.optionId}
                  >
                    {eachType.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="transaction-history-container">
            <h1 className="container-heading">History</h1>
            <div className="transaction-table-container">
              <ul className="history-tags-container">
                <li className="table-header">
                  <p className="table-header-item">Title</p>
                  <p className="table-header-item">Amount</p>
                  <p className="table-header-item">Type</p>
                  <p> </p>
                </li>
                {newHistoryItemList.map(eachTransactionItem => (
                  <TransactionItem
                    key={eachTransactionItem.id}
                    transactionItemDetails={eachTransactionItem}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

// Write your code here
