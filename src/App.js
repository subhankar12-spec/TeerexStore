import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import HomeScreen from './screens/homeScreen/HomeScreen';
import CartScreen from './screens/cartScreen/CartScreen';
import Navbar from './components/Navbar';
import { theme } from './theme';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
