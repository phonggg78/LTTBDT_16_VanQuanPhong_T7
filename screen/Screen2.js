import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native-web';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export default function Screen2({navigation}) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://653f49169e8bd3be29e029fc.mockapi.io/shops')
    .then((response) => response.json())
    .then((json) => {
      setData(json)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <View style={{width: '100%', height:'100%', backgroundColor:'#F3F4F6',alignItems:'center'}}>
          <View style ={{ margin:10,width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons name="arrow-back" size={24} color="gray" style={{marginLeft:30}} onPress={() => navigation.goBack()}/>
              <Text style={{fontSize:'24px',fontFamily:'Inter',left:-60}}>Shops near me</Text>
              <Ionicons onPress={() => navigation.navigate('Screen3')} name="search" size={24} color="green" style ={{marginRight:30}} />
          </View>
          {
           data.map((item) => {
              return(
                <View  style={{backgroundColor:'white', borderRadius:15, marginTop:15}}>
                <Image style={{width:'350px',height:'115px', margin:15,borderRadius:11}} source={{uri: item.img}} />
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row',}}>
                        <Ionicons name={item.status === "Accepting Orders" ? "checkmark" : "lock-closed"} size={17} style={{color:item.status ==="Accepting Orders"? "green": "red"}}/>
                        <Text style={{fontSize:'16px'}}>{item.status}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="time" size={17} style={{color:'green'}}/>
                        <Text style={{fontSize:'16px'}}>{item.time}</Text>
                    </View>
                    <Ionicons name="location" size={17} style={{color:'green'}}/>
                </View>
                <Text style={{fontSize:'18px', fontFamily:'Inter', marginTop:5, marginLeft:15}}>{item.name}</Text>
                <Text style={{fontSize:'16px', fontFamily:'Inter', marginTop:5,marginLeft:15}}>{item.address}</Text>
            </View>
              )
            })
          }
    </View>
  )
}

