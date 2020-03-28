import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import './estilo.css';

import api from '../../services/api';


export default function NewIncident() {
     //criando os estados da minha aplicação
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [value, setValue] = useState('');

     const ongId  = localStorage.getItem('ongId');
     const history = useHistory();

    async function handleNewIncident(event){
     event.preventDefault();
  
      const data = {
          title, description, value
      };

      try {
          await api.post('incidents', data,{
              headers:{
                  Authorization: ongId
              }
          })
          alert('Seu incident foi cadastrado com Sucesso...');
          history.push('/profile')

      } catch (error) {
          alert('Erro ao cadastrar o caso, tente novamente');
      }

     }


    return (
        <div className="new-incident">
        <div className="content">
            <section>
            <img src={Logo} />
                <h1>Cadastrar novo caso</h1>
                <p> Descreva o caso detalhadamente para encontrar um heroi para resolver isso.
                </p>
                
                <Link className="meuLink" to="/profile">
                    <FiArrowLeft size={16} color="e02041" /> 
                    Voltar para Profile
                 </Link> 
            </section>
        
        <form onSubmit={handleNewIncident}>
            <input 
            placeholder="Titulo do caso" 
            value={title}
            onChange={event =>setTitle(event.target.value)}
            />
            <textarea placeholder="Descrição"  value={description}
            onChange={event =>setDescription(event.target.value)}/>
            <input placeholder="Valor em Reais"
             value={value}
             onChange={event =>setValue(event.target.value)} />  
            <div>
            <button className="button" type="submit">Cadastrar</button>
            </div>
            

        </form>


        </div>
      
    </div>
    )
}
