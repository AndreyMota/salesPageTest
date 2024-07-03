import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SalePage from './Pages/SellPage';
import Quiz from './Pages/QuizPage';
import GlobalStyle from './globalStyle';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/DescubraOSeuPotencial" element={<SalePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

