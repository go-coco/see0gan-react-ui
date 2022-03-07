
import { list } from 'postcss';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { AddSpace } from './components/AddSpace';
import Post from './components/List.post';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <BrowserRouter> 
    <Routes>
      <Route index element={<Navbar/>} />
      <Route path="/" element={<Post/>} / >
      <Route path="/" element ={} / >
    </Routes>
    </BrowserRouter> */}
    <Navbar/>
    <AddSpace/>
  </>
  );
}

export default App;
