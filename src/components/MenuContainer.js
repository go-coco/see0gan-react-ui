import {setState} from 'react'
import '../Menu.css'

export const MenuContainer  = ({showMenu}) => {

	// 로그인 정보에 따라 다르게 보이게... using hook, state
	// props 써서 dynamic 하게 reusable 한 component 만들기 가능

	// constructor(props, context) = {
	// 	super(props, context);
	   
	// 	this.state = {
	// 	  visible: false
	// 	};
	   
	// 	this.toggleMenu = this.toggleMenu.bind(this);
	//   }
	   
	const toggleMenu = () => {
		this.setState({
			visible: !this.state.visible
		});
	  }

    const move = () => {

    }

// host : 공간 등록하기, 프로필 관리, 예약 리스트, 로그아웃
// guest : 프로필 관리, 예약 리스트

  return (
    <div className="nav_container">
		<div className="mp_body">
			<div className="mp_title">
				<h2>마이페이지</h2>
			</div>
			<div className="mp_list" onClick={move}>
				<span>시공간 홈</span>
			</div>
			<div className="mp_list" onClick={move}>
				<span>프로필 관리</span>
			</div>
			<div className="mp_list" onClick={move}>
				<span>예약 리스트</span>
			</div>
			<div className="mp_list" onClick={move}>
				<span>내공간 등록하기</span>
			</div>
			<div className="mp_list" onClick={move}>
				<span>1:1문의</span>
			</div>
			<div className="bottom">
				<div className="log_out">
					<a href="logOut.sgg">로그아웃</a>
				</div>
				<div>Powered by © SEE0GAN Corp.</div>
			</div>
		</div>
	</div>
  )
}

export default MenuContainer 