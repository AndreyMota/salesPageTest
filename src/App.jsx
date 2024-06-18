import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SalePage from './Pages/SellPage';
import GlobalStyle from './globalStyle';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SalePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

