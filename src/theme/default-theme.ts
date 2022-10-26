import ITheme from '../types/ITheme';

const defaultTheme: ITheme = {
  colors: {
    primary:
      'background: linear-gradient(180deg, #8BDCFF 0%, #103C59 100%); -webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;text-fill-color: transparent;',
    lightBlue: '#C2EDFF',
    textWhite: '#D9F3FF',
    aquaBlue: '#C1F6FF',
    faqText: '#6DCDDD',
    background: '#181818',
    black: '#000000',
    white: '#fff',
    lightGray: '#727272',
    darkGray: '#303030',
  },
  fonts: {
    normal: 'Outfit',
    regular: 'Outfit Regular',
    extraBold: 'Outfit ExtraBold',
    bold: 'Outfit Bold',
    light: 'Outfit Light',
    roboto: 'Roboto',
    inter: 'Inter Light',
    aldrich: 'Aldrich',
  },
  fontSize: {
    medium: '22px',
    xxLarge: '46px',
    large: '30px',
    xLarge: '38px',
    small: '18px',
    xSmall: '12px',
    mSmall: '14px',
    gigant: '56px',
    xGigant: '64px',
  },
};
export default defaultTheme;
