import React from 'react';
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';




import logoImg from '../../assets/logo.png';
import styles from './estilo';


export default function Details(){

    const route = useRoute();
    const incident  = route.params.incidents; //devrá ser passada o mesmo nome do parametro
     
    const navigation = useNavigation();
    const message = `Olá somos da ${incident.name} e estamos entrando em contato com voce. Pois gostariamos muito da sua ajuda no caso da ${incident.title}
    com o valor de ${ Intl.NumberFormat('pt-BR', {style:'currency' ,currency: 'BRL'}).format(incident.value)}`;
 
   function navigateBack(){
       navigation.navigate('Incidents');
   }

 function sendEmail(){
  MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,

  })
 }

 function sendWhatApp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp};text${message}`)
 }


   return (
       <View style={ styles.container}>
            <View style={styles.header} >
                    <Image source={logoImg}/>

                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name="arrow-left" size={30} color="#e02041"/>
                    </TouchableOpacity>
            </View>

                 <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG </Text>
                    <Text style={styles.incidentValue}>{incident.name} </Text>
                   
                    <Text style={styles.incidentProperty}>Cidade </Text>
                    <Text style={styles.incidentValue}>{incident.city} </Text>
                   
                    <Text style={styles.incidentProperty}>Estado </Text>
                    <Text style={styles.incidentValue}>{incident.uf} </Text>

                    <Text style={styles.incidentProperty}>CASO:  </Text>
                    <Text style={styles.incidentValue}>{incident.description }</Text>

                    <Text style={styles.incidentProperty}>VALOR: </Text>
                    <Text style={styles.incidentValue}> 
                      { Intl.NumberFormat('pt-BR', {style:'currency' ,currency: 'BRL'}).format(incident.value)}}
                     </Text>
               </View>

               <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia!</Text>
                        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>
                        <Text style={styles.heroDescription}>Entre em contato:</Text>
                       
                       <View style={styles.actions}>
                           <TouchableOpacity onPress={sendWhatApp} style={styles.action}>
                                    <Text style={styles.actionText}>
                                        WhatsApp
                                    </Text>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={sendEmail} style={styles.action}>
                                    <Text style={styles.actionText}>
                                        E-mail
                                    </Text>
                           </TouchableOpacity>


                       </View>
               </View>

       </View>
   );
}