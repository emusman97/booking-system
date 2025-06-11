interface Colors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  white: string;
  black: string;
  gray: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    disabled: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
  };
}

interface Typography {
  fontFamily: {
    base: string;
    heading: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    loose: number;
  };
}

interface Spacing {
  [key: number]: string;
}

interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface ZIndex {
  [key: number]: number;
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  breakpoints: Breakpoints;
  borderRadius: BorderRadius;
  shadows: Shadows;
  zIndex: ZIndex;
}
