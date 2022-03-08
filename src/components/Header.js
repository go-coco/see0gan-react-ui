import PropTypes from 'prop-types'
import Navbar from './Navbar'
import '../index.css'

const Header = () => {

  const search = (e) => {

    const value = e.target.value;

    if(window.event.keyCode==13){ // axios 
      console.log("Enter!");
      console.log(value);
    
    }
  }

   
  const navbar = (e) => {
      return <Navbar/>
  }

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
          onClick={(e) => navbar(e)}>
          <img id="icon_menu" alt="메뉴"  width="24" />
        </button>
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