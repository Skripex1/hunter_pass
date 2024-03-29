type colors = {
  primary: string;
  accent?: string;
  background?: string;
  black?: string;
  lightRed?: string;
  mediumRed?: string;
  backgroundBlue?: string;
  darkRed?: string;
  lightBlue: string;
  aquaBlue: string;
  faqText: string;
  textWhite: string;
  white: string;
  gray?: string;
  lightGray: string;
  darkGray: string;
  darkBlue: string;
  darkerBlue: string;
  lighterBlue: string;
  blue: string;
  lineBlue: string;
};
type fontSize = {
  medium: string;
  xLarge: string;
  xSmall: string;
  small: string;
  mSmall: string;
  large: string;
  xxLarge: string;
  gigant: string;
  xGigant: string;
  mxSmall: string;
  xxGigant: string;
};
type fonts = {
  normal: string;
  roboto: string;
  regular: string;
  aldrich: string;
  inter: string;
  bold: string;
  extraBold: string;
  light: string;
  interBold: string;
  interReg: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
