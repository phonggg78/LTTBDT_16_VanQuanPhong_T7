import { useEffect,useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
function Screen_API_01({navigation}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://653f49169e8bd3be29e029fc.mockapi.io/shops')
        .then((response) => response.json())
        .then((json) => {
           setData(json);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    console.log(data);

    return ( 
        <View style={{width: '100%', height:'100%', backgroundColor:'#DEE1E6',alignItems:'center'}}>
        <Text style={{height:'62px',width:'272px',marginTop:80,fontSize:'24px',fontFamily:'Inter'}}>Welcome to Cafe World</Text>
        {
            data.map((item) => {

                return(
                        <Image key={item.id} style={{height:'50px',width:'200px',margin:20}} source={{uri: item.img}}/>
                )
            })
        }
         <TouchableOpacity onPress={() => navigation.navigate('Screen2')}
    
         style={{height:'50px',width:'312px',borderRadius:'10px',backgroundColor:'#00BDD6',justifyContent:'center',alignItems:'center',marginTop:'100px'}
        }>
            <Text style={{height:'100%',with:'100%',fontSize:'14px',fontFamily:'Inter',textAlign:'center',top:'18px',color:'#FFFFFF'}}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
     );
}

export default Screen_API_01;
