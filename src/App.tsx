import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useEmitters from './hooks/useEmitters';
import useModalIsOpen from './hooks/useModallsOpen';
import useWeb3Modal from './hooks/useWeb3Modal';
import Home from './modules/home';
import initMerkleTree from './utils/merkle';

const App = (): JSX.Element => {
  useWeb3Modal();
  useEmitters();
  useModalIsOpen();
  useEffect(() => {
    const proofs = initMerkleTree('0x8210fdbfd92C20E942abb51fa726245C9DBbBD9F');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:address" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
