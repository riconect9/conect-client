import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import TelaExplorar from './components/TelaExplorar';
export default function App() {
return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/explorar" element={<TelaExplorar />} />
    </Routes>
  </BrowserRouter>
);
