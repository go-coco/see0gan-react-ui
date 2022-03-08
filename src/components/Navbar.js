
export const Navbar = () => {

    const move = () => {

    }

  return (
    <div class="wrapper">
		<div class="mp_body">
			<div class="mp_title">
				<h2>마이페이지</h2>
			</div>
			<div class="mp_list home" onClick={move}>
				<span>시공간 홈</span><span></span>
			</div>
			<div class="mp_list" onClick={move}>
				<span>프로필 관리</span><span></span>
			</div>
			<div class="mp_list" onClick={move}>
				<span>예약 리스트</span><span></span>
			</div>
			<div class="mp_list" onClick={move}>
				<span>공지사항</span><span></span>
			</div>
			<div class="mp_list" onClick={move}>
				<span>1:1문의</span><span></span>
			</div>
			<div class="bottom">
				<div class="log_out">
					<a href="logOut.sgg">로그아웃</a>
				</div>
				<div>Powered by © SEE0GAN Corp.</div>
			</div>
		</div>
	</div>
  )
}

export default Navbar