import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native-web';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
export default function Screen4({navigation}) {
    
  return (
    <View style={{width: '100%', height:'100%', backgroundColor:'#F3F4F6',alignItems:'center'}}>
          <View style ={{ margin:10,width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Ionicons name="arrow-back" size={24} color="gray" style={{marginLeft:30}} onPress={() => navigation.goBack()}/>
              <Text style={{fontSize:'24px',fontFamily:'Inter', left:-80}}>Your orders</Text>
              <Ionicons name="search" size={24} color="green" style ={{marginRight:30}} />
          </View>
          <View style={{width:"350px",height:"100px", backgroundColor:"#00BDD6", borderRadius:10}}>
                    <Text style={{fontSize:'16px',fontFamily:'Inter',marginTop:'20px',marginLeft:'10px'}}>CAFE DILIVERY</Text>
                    <Text style={{fontSize:'16px',fontFamily:'Inter', left:300}}>$5</Text>
                    <Text style={{fontSize:'16px',fontFamily:'Inter',marginLeft:'10px'}}>Order #18 </Text>
          </View>
          <View style={{width:"350px",height:"100px", backgroundColor:"#8353E2", borderRadius:10,marginTop:"10px"}}>
                    <Text style={{fontSize:'16px',fontFamily:'Inter',marginTop:'20px',marginLeft:'10px'}}>CAFE DILIVERY</Text>
                    <Text style={{fontSize:'16px',fontFamily:'Inter', left:300}}>$25</Text>
                    <Text style={{fontSize:'16px',fontFamily:'Inter',marginLeft:'10px'}}>Order #18 </Text>
          </View>
                    <View style={{flexDirection: 'row', backgroundColor:'white',height:'60px',width:'90%',margin:10,borderWidth:0.25,borderColor:'gray'}}>
                        <Image style={{width:'59px',height:'59px'}} source={{uri: "https://res.cloudinary.com/ddomrnpfv/image/upload/v1699171383/Img/Image_249_chsl1i.png"}} />
                        <View style={{width:'180px',backgroundColor:'white'}}>
                            <Text style={{fontSize:'16px', fontFamily:'Inter'}}>Salt</Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                        <Image style={{width:'20px',height:'20px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699168107/Img/Frame_sr0spa.png"}} />
                        <Text style={{fontSize:'16px', fontFamily:'Inter'}}>$5</Text>
                    </View>
                    </View>
                        <Image style={{width:'20px',height:'20px',top :'20px', left:'30px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_230_h9t77h.png"}} />
                        <Image style={{width:'20px',height:'20px',top :'20px',left:'65px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_231_ibl5yg.png"}} />
                    </View>

                    <View style={{flexDirection: 'row', backgroundColor:'white',height:'60px',width:'90%',margin:10,borderWidth:0.25,borderColor:'gray'}}>
                        <Image style={{width:'59px',height:'59px'}} source={{uri: "https://res.cloudinary.com/ddomrnpfv/image/upload/v1699171382/Img/Image_246_qqwb3p.png"}} />
                        <View style={{width:'180px',backgroundColor:'white'}}>
                            <Text style={{fontSize:'16px', fontFamily:'Inter'}}>Salt</Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                        <Image style={{width:'20px',height:'20px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699168107/Img/Frame_sr0spa.png"}} />
                        <Text style={{fontSize:'16px', fontFamily:'Inter'}}>$20</Text>
                    </View>
                    </View>
                        <Image style={{width:'20px',height:'20px',top :'20px', left:'30px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_230_h9t77h.png"}} />
                        <Image style={{width:'20px',height:'20px',top :'20px',left:'65px'}} source={{uri:"https://res.cloudinary.com/ddomrnpfv/image/upload/v1699167845/Img/Image_231_ibl5yg.png"}} />
                    </View>
           <TouchableOpacity style={{ height: 45, width: '90%',display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundColor: '#EFB034',marginTop: 80,borderRadius: 6,}}>
                <Text style={{ color: '#fff',fontSize: 16,fontWeight: 400}}>PAY NOW</Text>
            </TouchableOpacity>
    </View>
  )
}

