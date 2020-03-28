import React, { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import  HeroesImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg'
import './estilo.css';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Logon() {
    
    const [id, setId] = useState('');
    const history = useHistory();
    
    async function handleLogin(event){
        event.preventDefault();
        
        try {
             const response = await api.post('session', { id }  );

             localStorage.setItem('ongId', id);
             localStorage.setItem('ongName', response.data.name);
             history.push('/profile')
             console.log(response.data.name);

        } catch (error) {
            alert('Falha no login, tente novamente');
        }
     };


    return(
        <div className="logon-container">
            
            <section className="form">
            <img src={Logo} />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Digite seu ID" 
                        value={id}
                        onChange={event =>{ setId(event.target.value)}}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="meuLink" to="/register">
                        <FiLogIn color="e02041"/> 
                        Não tenho cadastro.
                     </Link> 
                </form>
            </section>
           
           <img src={HeroesImg} />

        </div>
        )
    
}

export default  Logon;

