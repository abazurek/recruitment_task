import React from "react";

import FormSection from "./FormSection";

export default function BottomSection() {

    return(
        <section className='bottom-section'>
            <div className='container'>
                <div className='text-section'>
                    <p className='contact'>Skontaktuj sie z nami</p>
                    <p className='number'>Zadzwoń +48 535 015 835 </p>
                </div>
                <FormSection/>
            </div>

        </section>
    )
}