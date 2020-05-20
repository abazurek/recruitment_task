import React from "react";
import {NavLink} from "react-router-dom";

export default function TradeFinance() {

    return(
        <div className='links-box'>
            <h1>
                Trade Finance Site
            </h1>
            <button className='liniks-button'><NavLink className='naw-link' to={'/'}>Powrót</NavLink></button>
        </div>
    )
}