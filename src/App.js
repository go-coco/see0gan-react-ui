import { list } from 'postcss';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { AddSpace } from './components/AddSpace';
import Post from './components/Posts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Posts from './components/Posts';
import {useState} from 'react';

function App() {

  const [spaces, setSpaces] = useState([

    {
      id: 1,
      name: 'SOCAR',
      capacity: 200,
      type: {
        type : "conference"
      },
      intro: "Hello World!"
    },
    {
      id: 2,
      name: 'GREENCAR',
      capacity: 100,
      type: {
        type : "party"
      },
      intro: "Hello BUS!"
    },
    {
      id: 1,
      name: 'HCAR',
      capacity: 2000,
      type: {
        type : "practice"
      },
      intro: "Hello Company!"
    },
  ])

  return (
    <>
    {/* <BrowserRouter> 
    <Routes>
      <Route index element={<Navbar/>} />
      <Route path="/" element={<Post/>} / >
      <Route path="/" element ={} / >
    </Routes>
    </BrowserRouter> */}
    <Header/>
    <Posts posts={spaces}/>
  {/* <AddSpace/> */}
  <Footer/>
  </>
  );
}

export default App;
