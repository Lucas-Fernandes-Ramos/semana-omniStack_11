import {StyleSheet} from 'react-native';
import Contants from  'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20
        
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
        textAlign:'center'
    },

    headerTextBold:{
        fontWeight: "bold"
    },

    title:{
        fontSize: 20,
        marginBottom: 15,
        marginTop: 30,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign:'center'
    },
    description:{
        fontSize: 15,
        lineHeight: 25,
        color: '#737380',
        textAlign: 'center'
    },
    incidentList:{
        marginTop: 35,

    },
    incident:{
        padding: 25,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 15    
    },
    incidentProperty:{
        fontSize: 15,
        color: '#41414d',
        fontWeight: 'bold',

    },
    incidentValue:{
        marginTop: 10,
        fontSize: 15,
        marginBottom: 25,
        color: '#737380'
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    detailsButtonText:{
        color: '#e02041',
        fontSize: 18,
        fontWeight: 'bold'
    }


})