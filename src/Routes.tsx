import React from 'react';
import { BackHandler, Platform, View, useColorScheme} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { Provider as PaperProvider, useTheme} from 'react-native-paper';



import { Auth, App} from './navigators';
import { login, logout} from './store/modules/auth/authslice';
import { light,dark } from './store/modules/theme/themeslice';
import {darkTheme,lightTheme } from './theme'
import type {RootState} from './store'
import { isAuthenticated } from './api/utils';



export default React.memo(function Routes() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.authState);
  const mode = useSelector((state: RootState) =>state.theme.mode)

  console.log({auth})

  const colorScheme = useColorScheme();

  React.useEffect(() => {
    if (colorScheme === 'dark') {
      dispatch(dark())
    }
    if (colorScheme === 'light') {
      dispatch(light())
    }
    if (colorScheme === null) {
      dispatch(light())
    }
    // return () => { }
  }, [colorScheme])

  let theme = mode ? darkTheme : lightTheme;

  const bootstrap = async () => {
    const isAuth = await isAuthenticated();
    if (isAuth) {
      dispatch(login());
    }else{
      dispatch(logout());
    }
  }

  React.useEffect(() => {
    bootstrap();
    return () => {}
  },[auth])


  

  return (
    <PaperProvider theme={theme}>
      {
        // <Auth />
        auth ? <App/> : <Auth />
      }     
    </PaperProvider>
  )
})
