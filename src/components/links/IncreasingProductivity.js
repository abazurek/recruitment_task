import React from "react";
import {NavLink} from "react-router-dom";

export default function IncreasingProductivity() {

    return (
        <div className='links-box'>
            <h1>
                Increasing Productivity Site
            </h1>
            <button className='liniks-button'><NavLink className='naw-link' to={'/'}>Powrót</NavLink></button>
        </div>

    )
}