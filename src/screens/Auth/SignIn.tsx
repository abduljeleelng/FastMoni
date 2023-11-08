import React from 'react'
import { StyleSheet,Platform,KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View,Image } from 'react-native'
import { Button, Text, TextInput, HelperText, useTheme, } from 'react-native-paper'
import { useDispatch,useSelector } from 'react-redux'
import { HORIZONTAL, IMAGES, VERTICAL} from '../../assets'
import { login } from '../../store/modules/auth/authslice'
import {RootState} from  '../../store'

import Loader from '../../components/loader/Loader';

import Toast from 'react-native-toast-message';
import { validateEmail } from '../../utils'
import { user_login } from '../../api'
import { authencate, isAuthenticated } from '../../api/utils'





export default function SignIn({navigation}:{navigation:any}) {
    const dispatch = useDispatch();
    const {colors} = useTheme()
    const mode = useSelector((state: RootState) =>state.theme.mode)
    const [values, setValues] = React.useState({
        email:"",
        password:"",
        loading:false,
        error:false,
        errorMessage:"",
        disabled:true,
        secureTextEntry:true
    });

    const {email,password,loading,error,errorMessage,disabled,secureTextEntry} = values;

    const handleChnage =(field:string, val:string)=> {
        setValues({...values,error:false,loading:false,disabled:false,errorMessage:'',[field]:val});
    }
   
    const changeSecureTextEntry=()=>{
        setValues({...values,secureTextEntry:!secureTextEntry});
    }

    const _handleSubmit = async () =>{
        Keyboard.dismiss();
        setValues({...values,loading:true});
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
         
      
          const payload = {
            email,
            password
          }
          const resp = await user_login(payload);
          console.log({resp});
          if(resp.error){
            Toast.show({
              type:'error',
              text1: 'Hello 👋',
              text2: resp.error
            });
            return setValues({...values,error: true, errorMessage : resp.error,loading:false})
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
                    text2: 'Your fastamoni login account is successfully! 👋'
              });
            }else{
              Toast.show({
                type:'error',
                text1: 'Hello 👋',
                text2: "Error in Authenticate"
              });
              return setValues({...values,error: true, errorMessage : 'Error in login , try again',loading:false})
            }
          }
          return setValues({...values,error: true, errorMessage : 'Error in login , try again',loading:false})
    }


  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={[styles.view,{backgroundColor:colors.background}]}
    >
        <Loader loading={loading} bgColor={colors.background}  color={colors.primary} top  />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image 
                    source={IMAGES.logo} 
                    style={styles.imgStyle} 
                />
                {/* <Text style={styles.labelText}> email </Text> */}
                <TextInput 
                    mode='flat'
                    placeholder='email'
                    value={email}
                    disabled={loading}
                    onChangeText={email=>handleChnage("email",email)}
                    left={<TextInput.Icon icon="email" />}
                    style={{marginVertical:VERTICAL/5}}
                />
                <Text style={styles.labelText}>Password </Text>
                <TextInput 
                    secureTextEntry={secureTextEntry}  
                    placeholder='Password'
                    label="Password"
                    value={password}
                    disabled={loading}
                    onChangeText={password=>handleChnage("password",password)}
                    left={<TextInput.Icon icon="key" color={colors.primary} />}
                    right={<TextInput.Icon icon={secureTextEntry ? "eye":"eye-off"} onPress={()=>changeSecureTextEntry()} /*color={colors.accent} */  />}
                />
                <HelperText type='error' visible={error} >{errorMessage}</HelperText>

                <Button onPress={loading ? ()=>null : ()=>_handleSubmit()} loading={loading} disabled={disabled || loading} mode="contained" style={styles.buttonViewStyle} labelStyle={styles.buttonTextStyle} contentStyle={styles.buttonContentStyle}> Login </Button>
            
                <Text onPress={()=>navigation.navigate("SignUp")} style={[styles.Paragraph,{marginTop:VERTICAL/1.5}]}>{`I don’t have an account ?`} <Text style={[styles.textOnPress, {color:colors.primary}]}> Sign Up </Text></Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    view : {
        flex :1,
        justifyContent :'center',
        alignContent : 'center',
    },
    container : {
        paddingHorizontal : HORIZONTAL,
    },
    imgStyle : {
        resizeMode : 'center',
        alignSelf :'center',
        marginTop:VERTICAL*2,
        height:VERTICAL * 2,
        width:HORIZONTAL * 18,
    },
    labelText :{
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : 'normal',
        paddingVertical : VERTICAL / 5,
    },
    textInputStyle :{

    },
    Paragraph :{
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : 'normal',
        alignSelf:'flex-end',
        justifyContent :'flex-end',
        marginVertical : VERTICAL /4,
    }, 
    textOnPress :{
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : 'normal',
    },
    buttonViewStyle :{
        marginTop : VERTICAL,
        justifyContent : 'center',
        alignItems :'center'
    },
    buttonTextStyle:{
        justifyContent : 'center',
        alignItems :'center',
        alignSelf : 'center'
    },
    buttonContentStyle :{
        width : HORIZONTAL * 20,
        height : VERTICAL * 1.3,
    }
})