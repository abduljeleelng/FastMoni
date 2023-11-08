import React from 'react'
import { View, StyleSheet, Image, ScrollView} from 'react-native'
import { Text, Button, Paragraph, useTheme, FAB } from 'react-native-paper';
import { HORIZONTAL, IMAGES, VERTICAL } from '../../assets';
interface Inavigation {
  navigation:any
}

export default function Welcome({navigation}:Inavigation) {
  const {colors} = useTheme(); 
  return (
    <ScrollView 
      style={{flex :1,backgroundColor:colors.background}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
    >
      <View 
        style={{
          alignItems:'center',
          paddingHorizontal : HORIZONTAL,
          justifyContent :'center',
        }}
      >
        <Image 
          source={IMAGES.logo} 
          // style={styles.imageStyle}
          style={{
            alignSelf:'center',
            marginTop:VERTICAL*2,
            height:VERTICAL * 2,
            width:HORIZONTAL * 18,
            // width:400,
            // height:120,
            // paddingTop:100
          }} 
        />
        <Text 
          style={[styles.title,{color:colors.primary}]}
        >
          {`FastaMoni`}
        </Text>
        <Paragraph style={[styles.description,{}]}>{`Simplified Money Management for all`}</Paragraph>

        <Button mode="contained" 
          onPress={()=>navigation.navigate("SignUp")} 
          style={[styles.buttonViewStyle,{}]} 
          labelStyle={[styles.buttonTextStyle,{}]}
        > Sign up </Button> 

        <Button 
          mode="outlined" 
          onPress={()=>navigation.navigate('SignIn')} 
          style={[styles.buttonViewStyle,{borderWidth:HORIZONTAL/30}]} 
          labelStyle={styles.buttonTextStyle}
        > Log In </Button>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText :{
    fontSize: 16,
    fontStyle : 'normal',
  },
  bgImage: {
    flex :1,
    justifyContent :'center',
  },
  contentView : {
    paddingHorizontal : HORIZONTAL,
    justifyContent :'center',
    alignItems : 'center',
  },
  imageStyle :{
    marginTop:VERTICAL,
    // height : VERTICAL * 8.5,
    // width:HORIZONTAL *18,
  },
  title: {
    fontStyle:'normal',
    fontWeight : 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical : VERTICAL / 2,
  },
  description:{
    fontStyle:'normal',
    fontSize: 14,
    textAlign: 'center',
  },
  dotStyle :{
    marginTop : - VERTICAL * 11,
    width : HORIZONTAL,
    height : VERTICAL / 3,
  },
  dotStyleActive :{
    marginTop : - VERTICAL * 11,
    width : HORIZONTAL,
    height : VERTICAL / 3,
  },
  buttonViewStyle :{
    marginTop : VERTICAL,
    marginHorizontal : HORIZONTAL,
    justifyContent : 'center',
    alignItems :'center'
  },
  buttonTextStyle:{
    width : HORIZONTAL * 18,
    height : VERTICAL * 1.5,
    paddingTop : VERTICAL /2,
    justifyContent : 'center',
    alignItems :'center',
    alignSelf : 'center'
  }
});

