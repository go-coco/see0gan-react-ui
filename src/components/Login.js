import {useState} from 'react'
import axios from 'axios'
import '../login.css'

export const Login = () => {

	const SPACE_API_BASE_URL = "localhost:3000"

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const [showEmailMsg, setShowEmailMsg] = useState(false)
	const [showPwMsg, setShowPwMsg] = useState(false)


	const send = (e) => {

		e.preventDefault();
		
	//	axios.post(SPACE_API_BASE_URL, value);
	}

	const handleChange = (e) => {
		
		const name = e.target.name;

		if(name === 'email')
		setShowEmailMsg(false)
		else if (name === 'password')
		setShowPwMsg(false)

	}

	const validate = (e) => {

		const name = e.target.id;
		const value = e.target.value;
	
		const emailRex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		const pwReg = /^[A-Za-z0-9]{4,12}$/;

		if(name === "user-id"){
			if(emailRex.test(value)){
				setEmail({...email, value });	
			} else if (value !== '') {
				setShowEmailMsg(true) 
				
			}
		}
		else if(name === "pw"){
			if(pwReg.test(value)){
				setPassword({...password, value});
			}
			else if(value !== ''){
				setShowPwMsg(true)
			}
		}
		// if(window.event.keyCode===13){ // axios 
		//   console.log("Enter!");
		//   console.log(value);
		//   e.preventDefault();
		//   
		// }
	  }
    
  return (
    <div className="content_wrap">
	<h1>로그인</h1>
	<div className="log_join_wrap">
		<form onSubmit={ (e) => send(e)} 
		name ="form-login" id="form-login" className="log_join_form">
			<input type="text" onBlur={(e) => validate(e)} onChange = {e => handleChange(e)}
			 className="email" placeholder ="이메일" 
			 name="email" id="user-id"/>
			<div className="form_check" id="email_check">{showEmailMsg && <label>이메일 형식이 올바르지 않습니다.</label>}</div>
			<input type="password" onBlur={(e) => validate(e)} onChange = {e => handleChange(e)} 
			className="pw" placeholder ="비밀번호" name="password" id="pw"/>
			<div className="form_check" id="pw_check">{showPwMsg && <label>4~12 자리의 문자 또는 숫자를 입력해주세요</label>}</div>
			
			<input type="submit" id="btn-submit" className="btn-submit" value="로그인"/>
		</form>
			<input type="button" id="btn-kakao" className="btn-submit" value="카카오톡으로 로그인"/>	
		<div className="no_mem">아직 See0gan 회원이 아니신가요? <br/>
			<a href="/host/join.sgg" className="join_link">{}회원가입</a>
		</div>
	</div>
</div>
  )
}
