import React, { useEffect,useState } from 'react';
import { StatusBar, Image } from 'react-native';
//import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './theme';
import Navigation from './navigations';
import { images } from './utils/images';
import { ProgressProvider, UserProvider } from './contexts';

SplashScreen.preventAutoHideAsync();

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(()=>{
    const prepareResources = async ()=>{
      try{
        await _loadAssets();
      }catch (error){
        console.log(error);
      }finally{
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };
    prepareResources();
  },[])

  const _loadAssets = async () => {
    const imageAssets = cacheImages([
      require('../assets/splash.png'),
      ...Object.values(images),
    ]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if(!isReady){
    return null;
  }

  return(
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProgressProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </ProgressProvider>
      </UserProvider>
    </ThemeProvider>
  ) 
  // : (
  //   <AppLoading
  //     startAsync={_loadAssets}
  //     onFinish={() => setIsReady(true)}
  //     onError={console.warn}
  //   />
  // );
};

export default App;