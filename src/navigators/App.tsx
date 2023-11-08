import React from 'react'
import {  NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider,initialWindowMetrics } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {  
    Home,More, 
    Appearance,Security,
} from '../screens/App';
;

import {lightTheme,darkTheme} from '../theme';
import { FocusAwareStatusBar } from '../components';
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState} from '../store'



type AppStackParamList = {
    home: undefined;
    security: undefined; 
    appearance: undefined; 
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>();


const HomeTab= () =>{
    const { colors } = useTheme();
    return(
        <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    let iconName = "more"
                    if (route.name==='Home') {
                        iconName = focused ?  'storefront-outline' : 'storefront-outline'
                    }
                    else if (route.name==='More'){
                        iconName = focused ? 'more' : 'page-next';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondary,
                tabBarActiveBackgroundColor:colors.background,
                tabBarInactiveBackgroundColor:colors.background
                })}
            >
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"Home"}} />
            <Tab.Screen name="More" component={More} options={{tabBarLabel:"More"}} />
        </Tab.Navigator>
    )
};


export default React.memo(function App() {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const isDark = useSelector((state: RootState)=>state.theme.mode)

    let theme = isDark ? darkTheme : lightTheme;
 

   
    return (
        <SafeAreaProvider
         initialMetrics={initialWindowMetrics}
        >
            <NavigationContainer 
                theme={theme}
            >  
                <FocusAwareStatusBar mode={isDark} backgroundColor={colors.background} />
                <Stack.Navigator 
                    screenOptions={{headerShown:false}} 
                    initialRouteName={"home"} 
                >
                        <Stack.Screen name='home' component={HomeTab} options={{headerShown:false}} />
                        <Stack.Group screenOptions={{ headerShown:true }}>

                            <Stack.Screen name='security' component={Security} options={{headerShown:false,animationTypeForReplace:'push'}} />
                            <Stack.Screen name='appearance' component={Appearance} options={{headerShown:false,animationTypeForReplace:'push'}} /> 
                        </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
})