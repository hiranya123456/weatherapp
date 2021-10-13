import * as React from "react"
import {Text,View,StyleSheet,Image}from "react-native"

export default class WeatherScreen extends React.Component{

constructor (){
  super()
   this.state={
     weather:""

   }
  
}

getweather=async()=>{

 var url= "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
 return fetch(url)
 .then(response=>response.json())
 .then(responseJson=>{
  this.setState({
    weather:responseJson
  })
 })
.catch(error=>{
  console.error(error)
})
 
}

componentDidMount=()=>{
this.getweather()
}




render(){
  if(this.state.weather===""){
    return(
      <View style={{flex:1}}>
        <Text>
          loading.......
        </Text>

      </View>
    )
  }
  else{
  return(
    <View style={styles.container}>
    <view style={styles.subcontainer}>
<Text>
  WeatherForecast

</Text>
<Image style={styles.cloudImage}
//source={require("./cloud.jpg")}
 />
   <View>
     <Text>
       {this.state.weather.main.temp}& deg:C

     </Text>
     <Text>
       humidity:{this.state.weather.main.humidity}
     </Text>
     <Text>
       {this.state.weather.weather[0].description}
     </Text>
   </View>

    </view>
    
    </View>

  )
}
  

}
}
const styles=StyleSheet.create({
  subcontainer:{
    flex:1,
    borderWidth:1,
    alignItems:"center"
  },
  conatiner:{
    flex:1,

  },
  cloudimage:{
    width:100,
    height:100,
    marginTop:20,
  }
})