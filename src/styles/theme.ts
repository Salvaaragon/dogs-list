import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#092327',
      dark: '#0C5961',
      light: '#00A9A5',
    },
    secondary: {
      main: '#4E8098',
      dark: '#90C2E7',
    },
    error: {
      main: '#D13B3B',
    },
    background: {
      default: '#F2F2F2',
    },
    text: {
      primary: '#545252',
      secondary: '#BFBDBD',
    },
  },
});

export default theme;
