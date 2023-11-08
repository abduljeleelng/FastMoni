
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  adaptNavigationTheme,
  configureFonts,
  // MD3Colors,
  // MD3Elevation,
  // MD3Theme,
} from 'react-native-paper';

import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({ 
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(PaperLightTheme, LightTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, DarkTheme);

const darkTheme = {
  ...CombinedDarkTheme,
  myOwnProperty: true,
  // mode: "adaptive",
  "colors": {
    ...CombinedDarkTheme.colors,
    "primary": "rgb(220, 184, 255)",
    "onPrimary": "rgb(71, 12, 122)",
    "primaryContainer": "rgb(95, 43, 146)",
    "onPrimaryContainer": "rgb(240, 219, 255)",
    "secondary": "rgb(248, 189, 42)",
    "onSecondary": "rgb(64, 45, 0)",
    "secondaryContainer": "rgb(92, 67, 0)",
    "onSecondaryContainer": "rgb(255, 223, 160)",
    "tertiary": "rgb(255, 183, 134)",
    "onTertiary": "rgb(80, 36, 0)",
    "tertiaryContainer": "rgb(114, 54, 0)",
    "onTertiaryContainer": "rgb(255, 220, 198)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(29, 27, 30)",
    "onBackground": "rgb(231, 225, 229)",
    "surface": "rgb(29, 27, 30)",
    "onSurface": "rgb(231, 225, 229)",
    "surfaceVariant": "rgb(74, 69, 78)",
    "onSurfaceVariant": "rgb(204, 196, 206)",
    "outline": "rgb(150, 142, 152)",
    "outlineVariant": "rgb(74, 69, 78)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(231, 225, 229)",
    "inverseOnSurface": "rgb(50, 47, 51)",
    "inversePrimary": "rgb(120, 69, 172)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(39, 35, 41)",
      "level2": "rgb(44, 40, 48)",
      "level3": "rgb(50, 44, 55)",
      "level4": "rgb(52, 46, 57)",
      "level5": "rgb(56, 49, 62)"
    },
    "surfaceDisabled": "rgba(231, 225, 229, 0.12)",
    "onSurfaceDisabled": "rgba(231, 225, 229, 0.38)",
    "backdrop": "rgba(51, 47, 55, 0.4)"
  }
};

const lightTheme = {
    ...CombinedDefaultTheme,
    myOwnProperty: true,
    // mode:'adaptive',
    "colors": {
      ...CombinedDarkTheme.colors,
    "primary": "rgb(120, 69, 172)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(240, 219, 255)",
    "onPrimaryContainer": "rgb(44, 0, 81)",
    "secondary": "rgb(121, 89, 0)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 223, 160)",
    "onSecondaryContainer": "rgb(38, 26, 0)",
    "tertiary": "rgb(150, 73, 0)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 220, 198)",
    "onTertiaryContainer": "rgb(49, 19, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(29, 27, 30)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(29, 27, 30)",
    "surfaceVariant": "rgb(233, 223, 235)",
    "onSurfaceVariant": "rgb(74, 69, 78)",
    "outline": "rgb(124, 117, 126)",
    "outlineVariant": "rgb(204, 196, 206)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(50, 47, 51)",
    "inverseOnSurface": "rgb(245, 239, 244)",
    "inversePrimary": "rgb(220, 184, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(248, 242, 251)",
      "level2": "rgb(244, 236, 248)",
      "level3": "rgb(240, 231, 246)",
      "level4": "rgb(239, 229, 245)",
      "level5": "rgb(236, 226, 243)"
    },
    "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
    "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
    "backdrop": "rgba(51, 47, 55, 0.4)"
  }
};

export {darkTheme,lightTheme }