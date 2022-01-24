import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {getItem} from './Reducer/MainReducer'

function Coin({users,getItem}) {
    useEffect(()=>{
        getItem()
    },[])
    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Mrk change</th>
                            <th>Last updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item,index)=>{
                            return <tr key={index}>
                                <td>{item.market_cap_rank}</td>
                                <td>
                                    <img src={item.image} alt="not found" style={{width:'25px',height:'25px'}} className='mx-2' />{item.name}
                                </td>
                                <td>{item.current_price}$</td>
                                <td>{item.market_cap_change_24h}</td>
                                <td>{item.last_updated}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default connect(state=>({users:state.array.users}),{getItem})(Coin)