import React from 'react'
import { View, TouchableOpacity, TextProps } from 'react-native'
import { Text,useTheme,Surface } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HORIZONTAL,VERTICAL } from '../../assets'


interface IFProfileBar extends TextProps {
    onPress?:()=>void,
    disabled?:boolean,
    title:string|undefined
    description?:string |undefined
    icon:string 
}


export default React.memo(function MoreBar({onPress,disabled,title,description,icon}:IFProfileBar) {
    const {colors} = useTheme()
  return (
    <Surface
        style={{
            elevation:1, 
            marginVertical:VERTICAL/10, 
            paddingHorizontal:HORIZONTAL/2, 
            paddingVertical:VERTICAL/3,
            borderRadius:HORIZONTAL/1.5,
        }}
    >
	<TouchableOpacity
        onPress={onPress}
        style={
            {
                flexDirection:'row', justifyContent:'flex-start', alignItems:'center',
            }
        }
        disabled={disabled}
    >
        <Icon name={icon} size={25} color={colors.primary} />
        <View style={{zIndex:2, marginLeft:HORIZONTAL, marginRight:'auto'}}>
            <Text numberOfLines={1} style={{ fontSize:16 }}>{title}</Text>
            <Text numberOfLines={1} style={{marginRight:HORIZONTAL*3,fontSize:10}}>{description}</Text>
        </View>
        <Icon name={'chevron-right'} size={25} color={colors.primary} />
    </TouchableOpacity>
    </Surface>
  )
})
