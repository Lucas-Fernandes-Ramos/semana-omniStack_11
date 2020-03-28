    import React, { useEffect, useState } from 'react'
    import logoImg from   '../../assets/logo.svg';
    import { Link, useHistory } from 'react-router-dom';
    import {FiPower} from 'react-icons/fi';
    import {FiTrash2} from 'react-icons/fi';
     
    import api from '../../services/api';

    import "./estilo.css"

    export default function Profile() {
          const [incidents, setIncidents] = useState([]);  
         //recuperando o nome da ong do localStorage
         const ongId = localStorage.getItem('ongId');

         const ongName = localStorage.getItem('ongName');
         const history = useHistory();

       useEffect(()=>{
            api.get('profile',  {headers:{Authorization: ongId, }}).then(response =>{
                setIncidents(response.data);
            })
       }, [ongId] );



       //criando a função deletar
       async function handleDeletar(id){
              try {
                 await  api.delete(`incidents/${id}`, {headers: { 
                     Authorization: ongId
                 }})
                 alert("Incident " + ongId + "Deletado com Sucesso");
                setIncidents(incidents.filter(incident => incident.id !== id))
              } catch (error) {
                  alert('Erro ao deletar o Incident' + error);
              }
       }



       function  handleLogout(){
           localStorage.clear();
           history.push('/')
       }

        return (
            <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Bem vindo" />
                    <span>Bem vinda, {ongName} </span>
                    <Link className="button" to="/incidents/news"> 
                    Cadastrar novo Caso
                    </Link>
                    <button onClick={handleLogout} type="button">
                        <FiPower size={60} color="e02041"/>
                    </button>
                </header>
                
                <h1>Casos Cadastrados</h1>
                <ul>
                  {
                      incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso: </strong>
                            <p>{incident.title}</p>
                            
                            <strong>Descrição: </strong>
                            <p>{incident.description}</p>

                            <strong>Valor: </strong>
                            <p>{Intl.NumberFormat('pt-br', { style:'currency', currency: 'BRL'}).format(incident.value)
                            }</p>

                            <button onClick={()=> handleDeletar(incident.id)} type="button">
                              <FiTrash2 size={20}/>
                            </button>
                    </li>

                      ))
                  }

              
                  
                </ul>

               
            </div>
        )
    }
    