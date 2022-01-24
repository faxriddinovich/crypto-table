import React from 'react'
import logo from '../images/coinlogo.png'
export default function Logo() {
    return (
        <div className='row'>
            <div className='col-md-12'>
                <img src={logo} alt='Not found' className='offset-4'/>
            </div>
        </div>
    )
}
