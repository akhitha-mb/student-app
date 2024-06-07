import logo from './logo.svg';
import './App.css';
import { AddStudent } from './components/AddStudent';
import { SearchStudent } from './components/SearchStudent';
import { DeleteStudent } from './components/DeleteStudent';
import { ViewallStudent } from './components/ViewallStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={(<AddStudent/>)} />
<Route path='/Delete' element={(<DeleteStudent/>)} />
<Route path='/Search' element={(<SearchStudent/>)} />
<Route path='/viewall' element={(<ViewallStudent/>)} />



    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
