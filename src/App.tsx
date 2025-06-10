import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebcamPage from './pages/WebcamPage';
import UploadPage from './pages/UploadPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webcam" element={<WebcamPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
}
