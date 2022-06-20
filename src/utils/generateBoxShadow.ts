import { Platform } from 'react-native';

interface IProps {
  xOffset: number;
  yOffset: number;
  shadowColorIos: string;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
  shadowColorAndroid: string;
}

export const generateBoxShadowStyle = ({
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
}: IProps) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  }

  return { elevation, shadowColor: shadowColorAndroid };
};
