import React from 'react'
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Appbar, Text, Switch,  Divider, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { HORIZONTAL, VERTICAL } from '../../../assets';
import {dark,light} from '../../../store/modules/theme/themeslice';

import {RootState} from '../../../store'



export default function Appearance({navigation}:{navigation:any}) {
  const disptach = useDispatch()
  const mode = useSelector((state:RootState) =>state.theme.mode)
  const {colors} = useTheme();
  const handleSelectDark = () => disptach(dark())
  const handleSelectlight = () => disptach(light())

  return (
    <View style={[styles.row,{backgroundColor:colors.background}]}>
      <Appbar.Header style={[
        {backgroundColor:colors.background, elevation:0, paddingHorizontal:HORIZONTAL/3}, 
          Platform.OS==='ios' && Platform.Version === '16.4' ?{marginTop:-VERTICAL}: 
          Platform.OS === 'ios' ? {marginTop:-VERTICAL*1.5} :{}
        ]}
      >
        <Appbar.BackAction onPress={()=>navigation.goBack()} />
        <Appbar.Content title={`Appearance theme`} style={{backgroundColor:colors.background}} color={colors.primary} />
      </Appbar.Header>
      <Divider />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal:HORIZONTAL,marginTop:VERTICAL/3}}
      >
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',  alignItems:'center', elevation:2}}>
            <Text style={{fontSize:12}}>Light </Text>
            <Switch value={mode==false ? true :false} onChange={()=>handleSelectlight()} />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:12}}>Dark </Text>
            <Switch value={mode==true ? true :false} onValueChange={()=>handleSelectDark()} />
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
  

