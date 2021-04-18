import React, { useEffect, useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import BootstrapStyleSheet from "react-native-bootstrap-styles";

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const App = ()=>{
  let [region,setRegion] = useState('Chennai');
  let [curr,setCurr] = useState('');
  let [min,setmin] = useState('');
  let [max,setmax] = useState('');
  let [feelsLike, setFeelsLike] = useState('');

  const getDatafromApi = async ()=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=d6a669e5a79c694217279bd63972b68b&units=metric`
    let data = await fetch(url);
    if(data.ok){
      data = await data.json();
      setCurr(data.main.temp);
      setmax(data.main.temp_max);
      setmin(data.main.temp_min);
      setFeelsLike(data.main.feels_like);
    }
  }

  useEffect(()=>{
    getDatafromApi();
  },[curr,min,max,feelsLike])

  return(
    <View style={[s.body,{flex:1}]}>
      <View style={[s.container,s.justifyContentCenter,{height:'100%'}]}>
        <View style={[s.row,s.justifyContentCenter,{height:'80%'}]}>
          <View style={[s.colSm7,s.justifyContentCenter,]}>
            <View style={[s.card,s.shadowLg,{borderRadius:'0.75em'} ]}>
              <View style={[s.cardHeader,{borderTopLeftRadius:'0.75em',borderTopRightRadius:'0.75em'}]}>
                <Text style={[{textAlign:'center'},s.textLarge]}>WEATHER APP</Text>
              </View>

              <View style={[{},s.cardBody,s.justifyContentCenter]}>

                <View style={[s.card,s.pt4,{alignItems:'center'}]}>
                  
                  <View style={[s.cardHeader,s.justifyContentCenter,s.shadow,{borderBottomColor:'#007bff',height:'70%',width:'80%',backgroundColor:'white'}]}>
                  
                    <View style={[s.justifyContentCenter,{textAlign:'center',height:'80%'}]}>
                      <Text style={[s.justifyContentCenter,s.Text,{fontSize:'3.75em',textAlign:'center'}]}>{`${curr}° Cel`}</Text>
                    </View>
                  
                    <Text style={[s.textPrimary, s.textMuted,s.textLarge,{textAlign:'center'}]}>Feels like {feelsLike}° Cel</Text>
                  </View>

                  <View style={[s.row,s.justifyContentCenter,{width:'90%',height:'30%'}]}>
                    
                    <View style={[s.col]}>
                      <Text style={[s.myAuto,s.mxAuto, s.textMuted,s.textLarge]}>{`Min: ${min}° Cel`}</Text>
                      
                    </View>

                    <View style={[s.col]}>
                      <Text style={[s.myAuto,s.mxAuto, s.textMuted,s.textLarge]}>{`Max: ${max}° Cel`}</Text>
                    </View>
                  </View>


                </View>


                <View style={[s.cardFooter]}>
                  <View style={[s.row]}>
                    <View style={[s.col]}><TextInput value={region} onChange={e => {setRegion(e.target.value)}} placeholder='Region' style={[s.formControl,{textTransform:'capitalize'}]}></TextInput></View>
                    <View style={[s.col]}><Button style={[s.btn,s.btnText]} title='GET DATA' onPress={() => {getDatafromApi()}}></Button></View>
                  </View>
                </View>
              </View>

              <View>

              </View>

            </View>
          </View>
        </View>
      </View>
    </View>






    //<View style={[s.body]}>
    //  <View style={[s.container,s.justifyContentCenter,s.h100,{alignItems:'center'}]}>
    //    <View style={[s.row, {height:'100%',width:'80%',border:'none'}]}>
    //      <View style={[s.card,s.myAuto,s.myAuto, s.shadow,{border:'none', borderRadius:'2em', height:'80%'}]}>
    //        <View style={[s.cardHeader,{backgroundColor:'white'}]}>
    //          <Text style={[s.text, s.textLarge, {alignItems:'center', textAlign:'center'}]}>WEATHER APP</Text>
    //        </View>
    //        <View style={[s.cardBody]}>
    //        <View style={[s.cardHeader,s.justifyContentCenter,s.shadowSm,{borderBottomColor:'#007bff',height:'70%',backgroundColor:'white'}]}>
    //            <View style={[s.justifyContentCenter,{textAlign:'center',height:'70%'}]}>
    //              <Text style={[s.justifyContentCenter,{fontSize:'3.75em'}]}>{`${curr}°Cel`}</Text>
    //            </View>
    //            <Text style={[s.textPrimary, s.textMuted,s.textLarge,{textAlign:'center', paddingTop:'1em'}]}>Feels like {feelsLike}°Cel</Text>
    //        </View>

            
    //        <View style={[s.cardHeader,s.justifyContentCenter,{borderBottomColor:'white',height:'25%',backgroundColor:'white', borderTopColor:'white'}]}>
    //            <Text style={[s.textMuted,s.textLarge,{textAlign:'center', paddingBottom:'3.5%'}]}>{`Min: ${min}°Cel Max: ${max}°Cel`}</Text>
    //        </View>

    //        <View style={[s.row,{bottom:'1%', alignItems:'center',alignContent:'stretch'}]}>
    //          <TextInput value={region} placeholder='Enter your region' onChange={e=>{setRegion(e.target.value);getDatafromApi()}} style={[s.formControl,{marginBottom:'2%',textTransform:'capitalize'}]}></TextInput>
    //        </View>
    //        </View>

    //      </View>
    //    </View>
    //  </View>
    //</View>
  )
}

export default App;
