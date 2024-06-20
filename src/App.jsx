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
          <Route path="/" element={<SalePage />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

