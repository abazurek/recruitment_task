import React from "react";
import {NavLink} from "react-router-dom";

export default function Crowdfunding() {

    return(
        <div className='links-box'>
            <h1>
                Crowdfunding Site
            </h1>
            <button className='liniks-button'><NavLink className='naw-link' to={'/'}>Powrót</NavLink></button>
        </div>

    )
}

