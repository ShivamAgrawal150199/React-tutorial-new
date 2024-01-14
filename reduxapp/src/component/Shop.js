import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actioncreators} from '../state/index'
const Shop = () => {

  const dispatch=useDispatch();
  const action=bindActionCreators(actioncreators, dispatch);
  return (
    <div>
        <h2>Deposit withdrew money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{action.depositmoney(100)}}>+</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{action.withdrawmoney(100)}}>-</button>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actioncreators.depositmoney(100))}}>+</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actioncreators.withdrawmoney(100))}}>-</button> */}
    </div>
  )
}

export default Shop
