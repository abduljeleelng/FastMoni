import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, useTheme,Paragraph } from 'react-native-paper';
import { HORIZONTAL, VERTICAL } from '../../assets';


export default function Home({navigation}:{navigation:any}) {
    const {colors} = useTheme()
  return (
    <SafeAreaView style={styles.row}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor:colors.background,
          marginVertical:VERTICAL/5
        }}
      >
        <View
          style={{
            paddingHorizontal:HORIZONTAL,
          }}
        >
          <Text>Home page</Text>
          <Paragraph>click on  more  </Paragraph>
         
        </View>
      </ScrollView>
    </SafeAreaView>
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
  