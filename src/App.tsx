import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useEmitters from './hooks/useEmitters';
import useModalIsOpen from './hooks/useModallsOpen';
import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modules/home';
import './App.css';
import WhitePaper from './modules/whitepaper/WhitePaper';

const App = (): JSX.Element => {
  useWeb3Modal();
  useEmitters();
  useModalIsOpen();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:address" element={<Home />} />
        <Route path="/whitepaper" element={<WhitePaper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
