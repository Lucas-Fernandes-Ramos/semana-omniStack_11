const express  = require("express");
const crypto = require('crypto');
const connection  = require('../database/connection');



module.exports = {
    async index(request, response){
        //total de casos usando o count
        const [count]   = await connection('incidents').count();
        console.log(count); 

        const {page  = -1} = request.query;

        const incidents = await connection('incidents')

        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page -1) * 5)
        .select([
                 'incidents.*',
                 'ongs.name',
                 'ongs.email',
                 'ongs.whatsapp',
                 'ongs.city',
                 'ongs.uf']);
        response.header('x-total-count',count['count(*)']);

        return response.json(incidents);


  },

  async create(request, response){
    const {title, description, value} = request.body;
    const ong_id = request.headers.authorization;
     
   const [id]  = await connection('incidents').insert({
       title, description,value,ong_id
   });

   return (response.json({ id }));
  
},

async delete(request, response){
   const  {id} = request.params;
   const ong_id = request.headers.authorization;
    
   const incidents = await connection('incidents')
   .where('id', id)
   .select('ong_id')
   .first();

   if(incidents.ong_id != ong_id){ //erro
    return response.status(401).json({error: "Operation not permitted."});
    }
    //se tudo deu certinho ele deleta do banco

    await connection('incidents').where('id',id).delete();

    return response.status(204).send();
}
}