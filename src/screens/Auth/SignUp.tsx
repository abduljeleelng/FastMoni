import React from 'react'
import { View,ScrollView, StyleSheet,Image, Platform} from 'react-native'
import { Text,Appbar,TextInput,Button,HelperText,Checkbox, useTheme} from 'react-native-paper'
import { VERTICAL,HORIZONTAL,IMAGES } from '../../assets'
import { validateEmail } from '../../utils'
import Loader from '../../components/loader/Loader';
import Toast from 'react-native-toast-message';
import { user_registration } from '../../api'
import { authencate, isAuthenticated } from '../../api/utils'
import { useDispatch } from 'react-redux'
import { login } from '../../store/modules/auth/authslice'



export default function SignUp({navigation}:{navigation:any}) {
  const {colors} = useTheme()
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email :"",
    password :"",
    password_confirmation :"",
    secureTextEntry:true,
    error :false,
    loading:false,
    errorMessage :'',
  })


  const {
    email,
    password,
    password_confirmation,
    secureTextEntry,
    error,
    loading,
    errorMessage,
  } = values



  const onChangeValues=(field:string, val:any)=>{
    return setValues({...values,error:false,loading:false, errorMessage:'',[field]:val})
  }

 
  const handleEmail = async () =>{
    setValues({...values,loading:true})
    if (!validateEmail(email.trim())) {
      Toast.show({
        type:'error',
        text1: 'Hello 👋',
        text2: 'Valid and working emaill address required'
      });
      return setValues({...values,error: true, errorMessage : 'Valid and working emaill address required',loading:false})
    }
    if(password == '') {
      Toast.show({
        type:'error',
        text1: 'Hello 👋',
        text2: 'Password is required'
      });
      return setValues({...values,error: true, errorMessage : 'Password must not be empty',loading:false})
    }
    if(password.length < 6) {
      Toast.show({
        type:'error',
        text1: 'Hello 👋',
        text2: 'password character must not less than 6 (six) character'
      });
      return setValues({...values,error: true, errorMessage : 'password character must not less than 6 (six) character',loading:false})
    }
    if(password !== password_confirmation) {
      Toast.show({
        type:'error',
        text1: 'Hello 👋',
        text2: 'Password must match each other'
      });
      return setValues({...values,error: true, errorMessage : 'password must matched each other',loading:false})
    }

    const payload = {
      email,
      password
    }

    const resp = await user_registration(payload);
    console.log({resp})
    if(resp.error){
      Toast.show({
        type:'error',
        text1: 'Hello 👋',
        text2: resp.error
      });
      return setValues({...values,error: true, errorMessage :resp.error,loading:false})
    }

    if (resp.token != null) {
      await authencate({token:resp.token});
      const success = await isAuthenticated()
      console.log({success})
      if(success){
        dispatch(login())
        return Toast.show({
              type: 'success',
              text1: `Dear `,
              text2: 'Your fast account is successfully created ! 👋'
        });
      }else{
        Toast.show({
          type:'error',
          text1: 'Hello 👋',
          text2: "Error in Authenticate"
        });
        return setValues({...values,error: true, errorMessage : 'Your account can not be created, try again',loading:false})
      }
    }
    return setValues({...values,error: true, errorMessage : 'Your account can not be created, try again',loading:false})
  }

  return(
    <View style={{flex:1,backgroundColor:colors.background}}>
      <Loader loading={loading} bgColor={colors.background}  color={colors.primary} top   />
      <View style={[styles.row,{zIndex:0}]}>
      <Appbar.Header style={[
        {backgroundColor:colors.background, elevation:0, paddingHorizontal:HORIZONTAL/3}, 
          Platform.OS==='ios' && Platform.Version === '16.4' ?{marginTop:-VERTICAL}: 
          Platform.OS === 'ios' ? {marginTop:-VERTICAL*1.5} :{}
        ]}
      >
          <Appbar.BackAction onPress={()=>navigation.goBack()} />
          <Appbar.Content title={``} style={{backgroundColor:colors.background}} color={colors.primary} />
        </Appbar.Header>
          <ScrollView
            style={[styles.container,{backgroundColor:colors.background}]} 
            contentContainerStyle={{paddingBottom:VERTICAL/5,marginBottom:VERTICAL/5}} 
            showsVerticalScrollIndicator={false} 
            alwaysBounceVertical={true}
            keyboardShouldPersistTaps='handled'
            keyboardDismissMode={`interactive`}
            automaticallyAdjustKeyboardInsets={true}
          >
            <View>
              <Image 
                source={IMAGES.logo} 
                style={styles.imgStyle} 
              />
              <Text> Email </Text>
              <TextInput
                placeholder='Enter your email address'
                keyboardType='email-address'
                value={email}
                disabled={loading}
                onChangeText={val=>onChangeValues('email',val)}
                left={<TextInput.Icon icon="email" />}
              />
              <Text style={styles.labelText}>Password </Text>
              <TextInput
                secureTextEntry={secureTextEntry}
                placeholder='Password'
                value={password}
                onChangeText={val=>onChangeValues('password',val)}
                left={<TextInput.Icon icon="key"  />}
                right={<TextInput.Icon  icon={secureTextEntry ? "eye":"eye-off"} onPress={()=>onChangeValues("secureTextEntry",!secureTextEntry)} />}
              />
              <Text style={styles.labelText}>Confirm Password </Text>
              <TextInput
                secureTextEntry={secureTextEntry}
                placeholder='Password Confirmation'
                value={password_confirmation}
                onChangeText={val=>onChangeValues('password_confirmation',val)}
                left={<TextInput.Icon icon="key" />}
                right={<TextInput.Icon icon={secureTextEntry ? "eye":"eye-off"} onPress={()=>onChangeValues("secureTextEntry",!secureTextEntry)} />}
              />
         
              <HelperText type="error" visible={error}> {errorMessage}</HelperText>

              <Button 
                onPress={handleEmail} 
                loading={loading} 
                disabled={loading}  
                mode="contained" 
                style={styles.buttonViewStyle} labelStyle={styles.buttonTextStyle} 
                contentStyle={styles.buttonContentStyle}
              > Continue </Button>
              <Text onPress={()=>navigation.navigate("SignIn")} style={styles.Paragraph}>Already have an account? <Text style={{color:colors.primary}}> Log in  </Text></Text>
            </View>
          </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  row : {
    flex :1,
    alignContent : 'center',
  },
  container : {
    paddingHorizontal : HORIZONTAL,
  },
  labelText:{

  },
  imgStyle:{
    // resizeMode : 'center',
    // width : HORIZONTAL * 10,
    // height : VERTICAL * 2,
    alignSelf :'center',
    marginTop:VERTICAL*2,
    height:VERTICAL * 2,
    width:HORIZONTAL * 18,
  },
  agreeStyle:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  agreeText:{
    fontSize : 14,
    fontStyle : 'normal',
    fontWeight : 'normal',
    alignSelf:'flex-start',
    justifyContent :'flex-start',
    marginVertical : VERTICAL /4,
  },
  Paragraph :{
    fontSize : 14,
    fontStyle : 'normal',
    fontWeight : 'normal',
    alignSelf:'flex-end',
    justifyContent :'flex-end',
    marginVertical : VERTICAL /4,
  },

  buttonViewStyle :{
    // marginTop : VERTICAL/5 ,
    justifyContent : 'center',
    alignItems :'center'
  },
  buttonTextStyle:{
    // fontFamily : FONTS.RobotoRegular,
    justifyContent : 'center',
    alignItems :'center',
    alignSelf : 'center'
  },
  buttonContentStyle :{
    width : HORIZONTAL * 20,
    height : VERTICAL * 1.3,
  },
});
