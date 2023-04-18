import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Word from './components/word/Word';
import Recap from './components/recap/Recap';
import Test from './components/test/Test';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/word" element={<Word />} />
        <Route path="/test" element={<Test />} />
        <Route path="/recap" element={<Recap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
