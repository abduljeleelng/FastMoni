import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { 
    Welcome, SignUp, SignIn, 
} from '../screens/Auth';
import { FocusAwareStatusBar } from '../components';
import { lightTheme,darkTheme } from '../theme';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


type AuthStackParamList = {
    Welcome: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();


export default React.memo(function Auth() {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) =>state.theme.mode)
    let theme = isDark ? darkTheme : lightTheme;

    return (
        <SafeAreaProvider>
            <NavigationContainer independent={true} theme={theme}>
                <FocusAwareStatusBar mode={isDark} backgroundColor={colors.background} />
                <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                    <AuthStack.Screen name="Welcome" component={Welcome} />
                    <AuthStack.Screen name="SignUp" component={SignUp} />
                    <AuthStack.Screen name="SignIn" component={SignIn} />
                </AuthStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
})