import React from 'react';
import {NavLink} from "react-router-dom";


import elipse from '../assets/elipse.png';

import project_management from '../assets/icons/project_management.png'
import grants from '../assets/icons/grants.png'
import international_accouting from '../assets/icons/international_accouting.png'
import international_law from '../assets/icons/international_law.png'
import trade_finance from '../assets/icons/trade_finance.png'
import attracting_investors from '../assets/icons/attracting_investors.png'
import immovables from '../assets/icons/immovables.png'
import commercialization from '../assets/icons/commercialization.png'
import increasing_productivity from '../assets/icons/increasing_productivity.png'
import crowdfunding from '../assets/icons/crowdfunding.png'
import insurance from '../assets/icons/insurance.png'
import marketing from '../assets/icons/marketing.png'

const imgTable = [];

imgTable.push({
    img: project_management,
    string: 'project_management',
    span: "Zarządzanie projektami"

});
imgTable.push({
    img: grants,
    string: 'grants',
    span: "Dotacje i granty międzynarodowe"

});
imgTable.push({
    img: international_accouting,
    string: 'international_accouting',
    span: "Międzynarodowa księgowość, kadry i podatki"

});
imgTable.push({
    img: international_law,
    string: 'international_law',
    span: "Prawo międzynarodowe"

});
imgTable.push({
    img: trade_finance,
    string: 'trade_finance',
    span: "Finansowanie handlu międzynarodowego"

});
imgTable.push({
    img: attracting_investors,
    string: 'attracting_investors',
    span: "Pozyskiwanie inwestorów (M&A)"

});
imgTable.push({
    img: immovables,
    string: 'immovables',
    span: "Nieruchomości"

});
imgTable.push({
    img: commercialization,
    string: 'commercialization',
    span: "Komercjalizacja własności intelektualnej"

});
imgTable.push({
    img: increasing_productivity,
    string: 'increasing_productivity',
    span: "Podnoszenie produktywności"

});
imgTable.push({
    img: crowdfunding,
    string: 'crowdfunding',
    span: "Crowdfunding"

});
imgTable.push({
    img: insurance,
    string: 'insurance',
    span: "Ubezpieczenia międzynarodowe"

});
imgTable.push({
    img: marketing,
    string: 'marketing',
    span: "Marketing 360"

});


function MainSection() {

    return (
        <section className='main-section'>
            <div className='container'>
                <div className='text-box'>
                    <p className='title'>Obszary naszych kompetencji</p>
                    <p className='subtitle'>Pomagamy uczyć się na błędach innych. Wspieramy i rekomendujemy wartościowe
                        rozwiązania biznesowe</p>
                </div>
                <div className='diagam-box'>
                    <div className='elipse-box'>
                        <img className='elipse-image' src={elipse} alt='elipse'/>
                    </div>
                    <ul>

                        {imgTable.map((item) => (
                            <li className='single-box-icon' key={imgTable.indexOf(item)}>
                                <NavLink className='naw-link' to={`/${item.string}`}>
                                    <div className='img-box'>
                                        <img src={item.img} alt={item.string}/>
                                    </div>

                                    <p>{item.span}</p>
                                </NavLink>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default MainSection