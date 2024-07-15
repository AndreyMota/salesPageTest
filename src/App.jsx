import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SalePage from './Pages/A/SellPage';
import Quiz from './Pages/A/QuizPage';
import GlobalStyle from './globalStyle';
import QuizB from './Pages/B/QuizPageB';
import SalePageB from './Pages/B/SellPageB';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizB />}/>
          <Route path="/DescubraOSeuPotencial" element={<SalePage />}/>    
        </Routes>
      </BrowserRouter>
    </>
  );
}

