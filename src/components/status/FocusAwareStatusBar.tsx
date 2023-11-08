import React from 'react'
import { StatusBar, View, StyleSheet, SafeAreaView, Platform, ViewStyle } from 'react-native';

interface FAProp {
    backgroundColor:string,
    mode:Boolean
}
export default React.memo(function FocusAwareStatusBar<PROPS extends FAProp>({backgroundColor,mode, ...props}:FAProp) {
    if (Platform.OS === 'ios') return (
        <View style={[styles.statusbar, {backgroundColor}]}>
            <SafeAreaView>
                <StatusBar barStyle={mode ? 'light-content':'dark-content'} backgroundColor={backgroundColor} {...props} />
            </SafeAreaView> 
        </View>
    )
    return <StatusBar barStyle={mode ? 'light-content':'dark-content'} backgroundColor={backgroundColor} {...props} />
})

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 :56;

const styles = StyleSheet.create({
    statusbar:{
        height:STATUSBAR_HEIGHT,
    },
    appBar:{
        height:APPBAR_HEIGHT,
    }
});