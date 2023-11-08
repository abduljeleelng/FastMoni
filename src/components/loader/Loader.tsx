import React from 'react'
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator,
    Platform
} from 'react-native';
import { VERTICAL } from '../../assets';

interface IPLoader {
  loading:boolean
  bgStyle?:any
  wrapStyle?:any
  bgColor?:string
  onBgColor?:string
  color?:string
  top?:boolean
}

const  android  = Platform.OS ==='android' 
export default React.memo(function Loader({loading=false,bgStyle,wrapStyle,bgColor,onBgColor,color,top}:IPLoader) {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      >
      <View style={[styles.modalBackground,{backgroundColor:bgColor },bgStyle]}>
        <View style={[top ? styles.activityIndicatorWrapperTop : styles.activityIndicatorWrapper,{backgroundColor:onBgColor},wrapStyle]}>
          <ActivityIndicator
            animating={loading}
            color={color} 
            size='large'
          />
        </View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      opacity:0.6
    },
    activityIndicatorWrapper: {
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    activityIndicatorWrapperTop: {
      flex:1,
      alignItems:'center',
      marginTop :android ? VERTICAL/5 : VERTICAL,
    }
});