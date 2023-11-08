import React from 'react'
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Appbar, Text,  IconButton,  Divider, useTheme } from 'react-native-paper'

import { HORIZONTAL,  VERTICAL } from '../../../assets';


export default function Security({navigation}:{navigation:any}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.row,{backgroundColor:colors.background}]}>
      <Appbar.Header style={[
        {backgroundColor:colors.background, elevation:0, paddingHorizontal:HORIZONTAL/3}, 
          Platform.OS==='ios' && Platform.Version === '16.4' ?{marginTop:-VERTICAL}: 
          Platform.OS === 'ios' ? {marginTop:-VERTICAL*1.5} :{}
        ]}
      >
        <Appbar.BackAction onPress={()=>navigation.goBack()} />
        <Appbar.Content title={`Settings`} style={{backgroundColor:colors.background}} color={colors.primary} />
      </Appbar.Header>
      <Divider />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal:HORIZONTAL,marginTop:VERTICAL/3}}
      >
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
          <IconButton icon={`wrench-outline`} />
          <View>
            <Text style={{fontSize:16}}>Change Password</Text>
            <Text style={{fontSize:10}}>Change your account password</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
});
  

