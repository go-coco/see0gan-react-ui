import PropTypes from 'prop-types'
import Navbar, { MenuContainer } from './MenuContainer'
import '../index.css'
import axios from "axios";
import { FaBars } from 'react-icons/fa'

const SPACE_API_BASE_URL = "http://localhost:8080/api/v1/spaces";

const Header = ({onClick, showMenu}) => {

  const search = (e) => {

    const value = e.target.value;

    if(window.event.keyCode===13){ // axios 
      console.log("Enter!");
      console.log(value);
      e.preventDefault();
      axios.get(SPACE_API_BASE_URL, value);
    }
  }

  // const onClick = () => {
  //   console.log('Click');
  // }
   
  // const showBar = (e) => {
    
  //   console.log(showMenu);
  //   if(!showMenu)
  //     return <MenuContainer/>
  // }

  return (

    <header className="header_wrap">
      {/* <div className='h-16 px-8 flex items-center'> */}
        <div className="header_logo">
          <a href="/" id="logo">see0gan</a>
        </div>
      <div className="search_box">
        <input type="text"
          id="q"
          className="search_txtbar"
          placeholder="공간명,공간유형으로 찾아보세요"
          onKeyUp={(e) => search(e)}/>
        {/* <img className="icon_search" alt="검색" width="24" /> */}
        {/* <div className="sp_insert_nav"><a href="/hostCenter">내 공간 등록하기</a></div> */}
        <button 
          className="btn_menu"
          // onMouseDown={(e) => navbar(e)}
          onClick={onClick}
          >
          < FaBars style={{ 	display: 'flex', cursor: 'pointer'}} />
        </button>
        {/* {showMenu && <MenuContainer /> } */}
      </div>
      {/* </div> */}
    </header>


    // {/* <div className="bg-purple-600">
    //   <div className="h-16 px-8 flex items-center">
    //     <p className="text-gray-300 font-bold">See0gan</p>
    //     </div>
    // </div> */}
  )
}

export default Header