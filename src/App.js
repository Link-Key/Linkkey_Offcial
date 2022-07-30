import { ThemeProvider } from '@mui/system';
import { darkTheme } from './config/theme';
import Home from './pages/home';
import { ScreenContextProvider } from './provider/screen';

function App() {

  return (
    <ScreenContextProvider>
      <ThemeProvider theme={darkTheme}>
        <Home />
      </ThemeProvider>
    </ScreenContextProvider>
  );
}

export default App;
