import { list } from 'postcss';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { AddSpace } from './components/AddSpace';
import Post from './components/Posts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Posts from './components/Posts';
import {useState} from 'react';
import MenuContainer from './components/MenuContainer';
import { Register } from './components/Register';
import {Login} from './components/Login';

function App() {

  const [user, setUser] = useState({
    login : false
  });

  const [showMenu, setShowMenu] = useState(false)

  const swichMenu = () => {

  }

  const [spaces, setSpaces] = useState([

    {
      id: 1,
      name: 'SOCAR',
      capacity: 200,
      price: 10000,
      tag: {
        tag1: "clean",
        tag2: "forest",
        tag3: "bbq"
      },
      type: {
        type : "conference"
      },
      intro: "Hello World!"
    },
    {
      id: 2,
      name: 'GREENCAR',
      capacity: 100,
      price: 8000,
      tag: {
        tag1: "취사가능",
        tag2: "가족모임",
        tag3: "오션뷰"
      },
      type: {
        type : "party"
      },
      intro: "Hello BUS!"
    },
    {
      id: 3,
      name: 'HCAR',
      price: 15000,
      tag: {
        tag1: "서초역 도보 5분",
        tag2: "최대 규모",
        tag3: "최고의 시설"
      },
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
    <div className='container'>
    <Header
    onClick={() => setShowMenu(!showMenu)}
    showMenu={showMenu}
    />
  {showMenu && <MenuContainer /> }
    <Posts posts={spaces}/>
    <AddSpace/>
    <Footer/>
    <Login/>
    <Register/>
  </div>
  </>
  );
}

export default App;
