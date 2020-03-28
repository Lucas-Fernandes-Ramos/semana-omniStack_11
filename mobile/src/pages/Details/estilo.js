
import {StyleSheet} from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Contants.statusBarHeight + 10
    
},

header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},


incident:{
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 10  
},
incidentProperty:{
    fontSize: 15,
    color: '#41414d',
    fontWeight: 'bold',

},
incidentValue:{
    marginTop: 10,
    fontSize: 15,
    marginBottom: 10,
    color: '#737380'
},
contactBox:{
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
},
heroTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
},
heroDescription:{
    fontSize: 15,
    color: "#737380",
    marginTop: 15
},
actions:{
    marginTop:16,
    flexDirection: 'row',
    justifyContent:'space-between'    
},

action:{
    backgroundColor: '#e02041',
    borderRadius: 10,
    height: 50,
    width: '48%',
    justifyContent:'center',
    alignItems:'center'

},
actionText:{
    color:'#fff',
    fontSize: 15,
    fontWeight: 'bold'
}


});