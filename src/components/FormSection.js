import React,{useState} from "react";


const info = {
    name:'',
    phone:'',
    email:'',
    company:'',
    employeesNum:'',
    income:'',
    message:'Wiadomość'
};


export default function FormSection() {

    const[information, setInformation]=useState(info);
    const [message, setMessage] = useState(null);


    const submitForm = (e) =>{
        e.preventDefault();

        if(information.name.length<5 || information.name.length>30){
            setMessage('Imię i nazwisko musi zawierac co najmniej 5 i co najwięcej 30 znaków !');
            return;
        }
        if(!isNaN(information.name)){
            setMessage('Imię i nazwisko nie może być liczbą');
            return;
        }

        if(information.phone.length!==9){
            setMessage('Numer telefonu musi zawierać 9 znaków');
            return;
        }
        if(information.email.length<5 || !information.email.includes('@')){
            setMessage('E-mail musi zawierać co najmniej 5 znaków i znak @');
            return;
        }


        if(information.company.length<3){
            setMessage('Nazwa firmy musi zawierac co najmnej 3 znaki');
            return;
        }
        if(parseInt(information.employeesNum)<1 || information.employeesNum===''){
            setMessage('Firma musi posiadać co najmniej 1 pracownika');
            return;
        }
        if(parseInt(information.income)<0 || information.income===''){
            setMessage('Roczny dochód firmy musi być większy od 0!');
            return;
        }
        if(information.message.length<20){
            setMessage('Wiadomość musi zawierać co najmniej 20 znaków');
            return;
        }


        setMessage(null);
        setInformation(info);
    };



    return(
        <form onSubmit={submitForm}>
            {message? <span className='message'>{message}</span> : ''}
            <div className='inputs-box'>
            <label>
                <input type='text' placeholder='Imię i nazwisko' value={information.name}
                onChange={({target})=>setInformation(prev=>({...prev, name: target.value}))}/>
            </label>
            <label>
                <input type='number' placeholder='Telefon' value={information.phone}
                onChange={({target})=>setInformation(prev=>({...prev, phone: target.value}))}/>
            </label>
            <label>
                <input type='email' placeholder='E-mail' value={information.email}
                onChange={({target})=>setInformation(prev=>({...prev, email: target.value}))}/>
            </label>
            <label>
                <input type='text' placeholder='Firma'  value={information.company}
                       onChange={({target})=>setInformation(prev=>({...prev, company: target.value}))}/>
            </label>
            <label>
                <input type='number' placeholder='Ilość pracowników'  value={information.employeesNum}
                       onChange={({target})=>setInformation(prev=>({...prev, employeesNum: target.value}))}/>
            </label>
            <label>
                <input type='number' placeholder='Roczny dochód firmy'  value={information.income}
                       onChange={({target})=>setInformation(prev=>({...prev, income: target.value}))}/>
            </label>
            <label className='textarea-label'>
                <textarea value={information.message} onChange={({target})=>setInformation(prev=>({...prev, message:target.value}))}>
                    Wiadomość</textarea>
            </label>
            </div>
            <label className='checkbox-label'>
                <input required type='checkbox'/>
                <span>Zapoznałem(-łam) się z
                <a href='https://justidea.agency/pl/polityka-prywatnosci/' target='_blank' rel='noopener noreferrer'>Polityką prywatności </a>
                oraz z <a href='https://justidea.agency/pl/' target='_blank' rel='noopener noreferrer'> Zastrzeżeniami prawnymi</a></span>
            </label>

            <button className='form-button' type='submit'>Wyślij</button>
        </form>
    )
}