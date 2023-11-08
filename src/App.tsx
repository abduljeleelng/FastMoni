/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
*/

import React,{Component} from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import {store} from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableFreeze } from 'react-native-screens';
import Toast from 'react-native-toast-message';


enableFreeze(true);

type Props = {};
class App extends Component<Props> {
  constructor({props}:{props:any}) {
    super(props);
    this.state={

    }
  }


  async componentWillUnmount() {
  }
  async componentDidMount(){
   
  }

  async componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {

  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    return false;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): boolean {
    return false;
  }

  render(): React.ReactNode {
    return(
      <GestureHandlerRootView style={{flex:1}}>
        <Provider store={store} >
          <Routes />
          <Toast/>
        </Provider>
      </GestureHandlerRootView>
    )
  }
}
export default  App;
