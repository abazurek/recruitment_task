import React from "react";

export default function FormSection() {

    return(
        <form>
            <label>
                <input type='text' placeholder='Imię i nazwisko'/>
            </label>
            <label>
                <input type='tel' placeholder='Telefon'/>
            </label>
            <label>
                <input type='email' placeholder='E-mail'/>
            </label>
            <label>
                <input type='text' placeholder='Firma'/>
            </label>
            <label>
                <input type='number' placeholder='Ilość pracowników'/>
            </label>
            <label>
                <input type='number' placeholder='Roczny dochód firmy'/>
            </label>
            <label>
                <textarea>Wiadomość</textarea>
            </label>
            <label>
                <input type='checkbox'/> Zapoznałem(-łam) się z
                <a href='https://justidea.agency/pl/polityka-prywatnosci/' target='_blank' rel='noopener noreferrer'>Polityką prywatności</a>
                oraz z <a href='https://justidea.agency/pl/' target='_blank' rel='noopener noreferrer'> Zastrzeżeniami prawnymi</a>
            </label>
            <button type='submit'>Wyślij</button>
        </form>
    )
}