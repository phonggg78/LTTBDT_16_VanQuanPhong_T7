import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native-web';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export default function Screen3({navigation}) {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://653f49169e8bd3be29e029fc.mockapi.io/Drinks')
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
              <Text style={{fontSize:'24px',fontFamily:'Inter', left:-80}}>Drinks</Text>
              <Ionicons name="search" size={24} color="green" style ={{marginRight:30}} />
          </View>
        {
                data.map((item) => {
                   return(
                    <View style={{flexDirection: 'row', backgroundColor:'white',height:'60px',width:'90%',margin:10,borderWidth:0.25,borderColor:'gray'}}>
                        <Image style={{width:'59px',height:'59px'}} source={{uri: item.img}} />
                        <View style={{width:'180px',backgroundColor:'white'}}>
                            <Text style={{fontSize:'16px', fontFamily:'Inter'}}>{item.name}</Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                        <Image style={{width:'20px',height:'20px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699168107/Img/Frame_sr0spa.png"}} />
                        <Text style={{fontSize:'16px', fontFamily:'Inter'}}>{item.price}</Text>
                    </View>
                    </View>
                        <Image style={{width:'20px',height:'20px',top :'20px', left:'30px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_230_h9t77h.png"}} />
                        <Image style={{width:'20px',height:'20px',top :'20px',left:'65px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_231_ibl5yg.png"}} />
                    </View>
                   )
                })
        }
           <TouchableOpacity onPress={() => navigation.navigate('Screen4')} style={{ height: 45, width: '90%',display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundColor: '#EFB034',marginTop: 20,borderRadius: 6,}}>
                <Text style={{ color: '#fff',fontSize: 16,fontWeight: 400}}>GO TO CART</Text>
            </TouchableOpacity>
    </View>
  )
}

