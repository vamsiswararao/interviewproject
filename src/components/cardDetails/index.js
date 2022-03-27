import './index.css'
import {GiBurningDot} from 'react-icons/gi'

const CardDetails = props => {
  const {details} = props
  const {
    name,
    availableToSpend,
    budgetName,
    cardType,
    expiry,
    limit,
    spent,
  } = details
  return (
    <li className="card-details-container">
      <h1>{name}</h1>
      <div className="name">
        <div className="name-container">
          <p>vishal</p>
          <p>.</p>
          <p>{budgetName}</p>
        </div>
        <GiBurningDot />
      </div>
      <div className="spend-container">
        <p className="subscription">{cardType}</p>
        <p>
          express: {expiry} {limit}
        </p>
      </div>
      <div className="spend-container">
        <div className="money-container">
          <p className="circle red">.</p>
          <p>spant</p>
        </div>
        <p>
          {spent.value} {spent.currency}
        </p>
      </div>
      <div className="spend-container">
        <div className="money-container">
          <p className="circle green">.</p>
          <p>Available to spend</p>
        </div>
        <p>
          {availableToSpend.value} {availableToSpend.currency}
        </p>
      </div>
    </li>
  )
}
export default CardDetails
