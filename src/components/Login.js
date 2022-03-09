import React from 'react'
import axios from 'axios'

export const Login = () => {
    
  return (
    <div className="content_wrap">
	<h1>로그인</h1>
	<div className="log_join_wrap">
		<form name ="form-login" id="form-login" className="log_join_form">
			<input type="text" className="email" placeholder ="이메일" name="TBH_EMAIL" id="idVal"/>
			<div className="form_check" id="email_check"></div>
			<input type="password" className="pw" placeholder ="비밀번호" name="TBH_PASSWORD" id="pwVal"/>
			<div className="form_check" id="pw_check"></div>
			
			<input type="button" id="btn-submit" className="btn-submit" value="로그인"/>
		</form>
		<div className="no_mem">아직 See0gan 회원이 아니신가요? <br/>
			<a href="/host/join.sgg" className="join_link">{}회원가입</a>
		</div>
	</div>
</div>
  )
}
