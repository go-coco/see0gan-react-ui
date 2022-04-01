import React, { useState } from 'react'

export const Register = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [showEmailMsg, setShowEmailMsg] = useState(false)
	const [showPwMsg, setShowPwMsg] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)

	const send = (e) => {

	}

	const handleChange = (e) => {
		
		const name = e.target.name;
		const value = e.target.value;

		console.log(name);
		console.log(value);
		console.log(password.value)

		if(name === 'email')
		setShowEmailMsg(false)
		else if (name === 'password')
		setShowPwMsg(false)
		else if (name === 'confirm'){
			console.log("!")
			console.log("pass" + password)
			console.log("con" + value)
			if(value === '' || password.value === '' || password.value === value)
				setShowConfirm(false)
			else if(password.value !== value){
				setShowConfirm(true)
				console.log(false)
			}
		//	else setShowConfirm(false)
		}
		
	}

	const validate = (e) => {

		const name = e.target.name;
		const value = e.target.value;
	
		const emailRex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		const pwReg = /^[A-Za-z0-9]{4,12}$/;

		console.log(name);

		if(name === "email"){
			if(emailRex.test(value)){
				setEmail({...email, value });	
			} else if (value !== '') {
				setShowEmailMsg(true) 
			}
		}
		else if(name === "password"){
			if(pwReg.test(value)){
				setPassword({...password, value});
			}
			else if(value !== ''){
				setShowPwMsg(true)
			}
		}
		// else if(name === "confirm"){
		// 	if(value === '' || password === '') 
		// 	setShowConfirm(false)
		// 	else if(password !== value)
		// 	setShowConfirm(true)
		//}
	}


  return (
    <div className="content_wrap">
	<h1>회원가입</h1>
	<div className="log_join_wrap">
	<form name ="form-signup" id="form-signup" className="log_join_form"
	onSubmit={(e) => send(e)}>
		<input type ="text" id="i-nickname" name="nickname" placeholder="닉네임"/>
		<div className="form_check" id="nickname_check">{showConfirm && <label></label>}</div>
		<input type ="text"  onBlur={(e) => validate(e)} onChange = {e => handleChange(e)}
		id="i-email" name="email" placeholder="이메일"/>
		<div className="form_check" id="email_check">{showEmailMsg&&<label>이메일 형식이 올바르지 않습니다.</label>}</div>
		<input type ="text" onBlur={(e) => validate(e)} onChange = {e => handleChange(e)}
		id= "i-password" name="password" placeholder="비밀번호"/>
		<div className="form_check" id="pw_check">{showPwMsg  && <label>4~12 자리의 문자 또는 숫자를 입력해주세요.</label>}</div>
		<input type ="text" onBlur={(e) => validate(e)} onChange = {e => handleChange(e)}
		id="i-confirm" name="confirm" placeholder="비밀번호 확인"/>
		<div className="form_check" id="confirm_check" >{showConfirm && <label>입력한 비밀번호와 다릅니다.</label>}</div>
	 	<input type="submit" id="btn-submit" value="가입하기"/>
	</form>
	</div>
    </div>
  )
}
