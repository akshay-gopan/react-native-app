import { createTheme } from '@shopify/restyle';


const theme = createTheme({
  colors: {
    primary: '#007bff', 
    secondary: '#6c757d', 
    background: '#f8f9fa', 
    text: '#212529', 
    white: '#ffffff', 
    black: '#000000', 
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    heading: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
    },
  },
  borderRadii: {
    sm: 4, 
    md: 8, 
    lg: 16, 
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
  textVariants: {
    body: {
      fontSize: 'body',
      color: 'text',
    },
    heading: {
      fontSize: 'heading',
      color: 'text',
      fontWeight: 'bold',
    },
    link: {
      color: 'primary',
    },
  },
});

export default theme;
