import React from "react";
import {NavLink} from "react-router-dom";

export default function Immovables() {

    return(
        <div className='links-box'>
            <h1>
                Immovables site
            </h1>
            <button className='liniks-button'><NavLink className='naw-link' to={'/'}>Powrót</NavLink></button>
        </div>

    )
}