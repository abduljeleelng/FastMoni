import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet,  View, } from 'react-native'
import { Appbar, Button,useTheme, Divider } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { HORIZONTAL, VERTICAL } from '../../assets';

import { logout} from '../../store/modules/auth/authslice';





import MoreBar from '../../components/bar/MoreBar';
import { removeToken } from '../../api/utils';



export default React.memo(function More({navigation}:{navigation:any}) {
  const {colors} = useTheme()
  const dispatch = useDispatch()


  const handleLogOut = async () =>{
    await removeToken();
    dispatch(logout());
  }

  

  return (
    <SafeAreaView style={styles.row}>
       <Appbar.Header style={[
        {backgroundColor:colors.background, elevation:0, paddingHorizontal:HORIZONTAL/3}, 
          Platform.OS==='ios' && Platform.Version === '16.4' ?{marginTop:-VERTICAL}: 
          Platform.OS === 'ios' ? {marginTop:-VERTICAL*1.5} :{}
        ]}
      >
        <Appbar.Content title={` `} style={{backgroundColor:colors.background}} color={colors.primary} />
        <Appbar.Action animated={true} icon="bell" color={colors.primary} />
      </Appbar.Header>
      <View style={{paddingHorizontal:HORIZONTAL,backgroundColor:colors.background}}>
        
      </View>
      <Divider />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor:colors.background,
          marginVertical:VERTICAL/5
        }}
      >
        <View
          style={{
            paddingHorizontal:HORIZONTAL
          }}
        >
        <MoreBar
          title='Report'
          description='Get the report'
          icon='chart-box-outline'
        />
        <MoreBar
          title='Security'
          description='Protect your account'
          icon='security'
          onPress={()=>navigation.navigate('security')}
        />
        <MoreBar
          title='Theme'
          description='Set the favourite theme for the App'
          icon='camera-burst'
          onPress={()=>navigation.navigate('appearance')}
        />
        </View>
      </ScrollView>
      <Divider />
      <View style={{ paddingHorizontal:HORIZONTAL, justifyContent:'center', marginVertical:VERTICAL/2}}>
        <Button
          mode='contained'
          onPress={handleLogOut}
        >Log out</Button>
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
    row : {
      flex :1,
      alignContent : 'center',
    },
    container : {
      paddingHorizontal : HORIZONTAL,
    },
  });
  

