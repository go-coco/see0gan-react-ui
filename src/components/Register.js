import React from 'react'

export const Register = () => {
  return (
    <div className="content_wrap">
	<h1>회원가입</h1>
	<div className="log_join_wrap">
	<form name ="form-signup" id="form-signup" className="log_join_form">
		<input type ="text" id="i-nickname" name="TBH_NICKNAME" placeholder="닉네임"/>
		<div className="form_check" id="nickname_check"></div>
		<input type ="text" id="i-name" name="TBH_NAME" placeholder="이름"/>
		<div className="form_check" id="name_check"></div>
		<input type ="text" id="i-email" name="TBH_EMAIL" placeholder="이메일"/>
		<div className="form_check" id="email_check"></div>
		<input type ="text" id= "i-password" name="TBH_PASSWORD" placeholder="비밀번호"/>
		<div className="form_check" id="pw_check"></div>
		<input type ="text" id="i-confirm" placeholder="비밀번호 확인"/>
		<div className="form_check" id="confirm_check"></div>
		<input type ="text" id= "i-phone" name="TBH_PHONE" placeholder="휴대폰 번호"/>
		<div className="form_check" id="phone_check"></div>
	 	<input type="button" id="btn-submit" class="btn-submit h_submit" value="가입하기"/>
	</form>
	</div>
    </div>
  )
}
