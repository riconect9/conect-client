import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaExplorar from './components/TelaExplorar';
export default function App() {
 return (<BrowserRouter><Routes><Route path='/explorar' element={<TelaExplorar />} /></Routes></BrowserRouter>); }