import React from 'react'

export const AddSpace = () => {
  return (
	  <div className='flex max-w-2xl mx-auto shadow border-b'>
		  <div className='px-8 py-8'>
			  <div className='font-thin text-2xl tracking-wider'>
				  <h1>공간 등록하기</h1>
			  </div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>공간 이름</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2" />
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>공간 유형</label>
				<input type="checkbox" className="h-4 border mt-2 px-2 py-2" />
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>공간 소개</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2" />
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>공간 상세 설명</label>
				<input type="text"className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>최대 수용 인원</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>주소</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>공간 태그</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2" />
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>수용 인원</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>예약 시 주의 사항</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>이미지</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
			<div className='items-center justify-center h-14 w-full my-4'>
				<label className='block text-gray-600 text-sm font-normal'>웹사이트</label>
				<input type="text" className="h-10 w-96 border mt-2 px-2 py-2"/>
			</div>
				<div className='items-center justify-center h-24  my-4 space-x-4'>
					<button className='rounded text-white font-semibold bg-green-500 hover:bg-green-800 px-6 py-2'>
						저장
					</button>
				</div>
		{/* </div> */}
</div>
	  </div>

	    )
	}
//     <div class="wrap">
// <header class="header">
// 	<div class="subheader_wrap">
// 		<button class="btn_back" onclick="location.href='#'">
// 			<img id="icon_back" alt="이전" src="../resources/icon/back_y.jpg" width="24">
// 		</button>
// 		<h2>기본 정보</h2>
// 		<button class="btn_menu" onclick="location.href='#'">
// 			<img id="icon_menu" alt="메뉴" src="../resources/icon/menu_bar_y.png" width="24">
// 		</button>
// 	</div> 
// </header>
// <div class="content_wrap">
// <div class="heading">
// 	<h3>공간 정보를 입력해주세요.</h3>
// 	<div class="required">
// 		<span class="required_s">*</span>
// 		<span class="required_txt">필수입력</span>
// 	</div>
// </div>
// <form name="spaceInsert" id="spaceInsert">
// 	<input type="hidden" name="tbsp_num" id="tbsp_num" readonly>
// 	<div class="box_form">
// 		<div class="title">공간명<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_name" id="tbsp_name" size="20" placeholder="공간명 입력하세요">
// 	</div>
// 	<div class="box_form chkbox_style">
// 		<div class="title">공간유형<span class="required_s">*</span></div>
// 		<input type="checkbox" name="tbsp_type" id="tbsp_type1" class="tbsp_type" value="party" />
// 		<label for="tbsp_type1" class="ellip">파티룸</label>    
// 	    <input type="checkbox" name="tbsp_type" id="tbsp_type2" class="tbsp_type" value="practice" />
// 	    <label for="tbsp_type2" class="ellip">연습실</label>   
// 	    <input type="checkbox" name="tbsp_type" id="tbsp_type3" class="tbsp_type" value="studio" />
// 	    <label for="tbsp_type3" class="ellip">촬영스튜디오</label>   
// 	    <input type="checkbox" name="tbsp_type" id="tbsp_type4" class="tbsp_type" value="conference" />
// 		<label for="tbsp_type4" class="ellip">회의실</label>
// 	</div>

// 	<div class="box_form">
// 		<div class="title">공간 한줄 소개<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_intro1" id="tbsp_intro1" size="50"  placeholder="공간을 소개하는 한줄 문장을 입력해주세요">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">공간 소개<span class="required_s">*</span></div>
// 		<textarea name="tbsp_intro2" id="tbsp_intro2" rows="10" placeholder="공간을 상세히 소개해주세요"></textarea>
// 	</div>

// 	<div class="box_form">
// 		<div class="title">최대 수용 인원<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_capacity" id="tbsp_capacity" size="20" placeholder="수용 인원">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">공간 태그<span class="required_s">*</span></div>
// 		<ol id='addTag'></ol>
// 		<input type='text' name='tbsp_tag' id='tbsp_tag' value="#" placeholder="태그입력"/>
// 		<!-- 태그삭제 -->
// 		<ul id='addTag'></ul>
// 		<input type='button' class="pupl_btn" value='추가' onclick='addList()' />
// 		<input type='button' class="pupl_btn" value='삭제' onclick='removeItem()' />
		
		
// 	</div>


// 	<div class="box_form">
// 		<div class="title">시설안내<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_guide" id="tbsp_guide" size="20" placeholder="어떤 시설이 포함되어 있나요">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">예약 시 주의사항<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_caution" id="tbsp_caution" size="20" placeholder="예약시 주의사항">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">웹사이트</div>
// 		<input type="text" name="tbsp_url" id="tbsp_url" size="20"  placeholder="웹사이트 URL">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">대표 이미지<span class="required_s">*</span></div>
// 		<input type="file" name="tbsp_img1" id="tbsp_img1" class="pupl_btn">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">이미지<span class="required_s">*</span></div>
// 		<input multiple="multiple" type="file" name="tbsp_img2" id="tbsp_img2" class="pupl_btn">
// 	</div>

// 	<div class="box_form">
// 		<div class="title">주소(위치)<span class="required_s">*</span></div>
// 		<input type="text" name="tbsp_addr" id="sample4_postcode" placeholder="우편번호">
// 		<input type="button" name="tbsp_addr" class="pupl_btn" onclick="sample4_execDaumPostcode()" value="주소등록">
// 		<input type="text" name="tbsp_addr" id="sample4_roadAddress" placeholder="도로명주소">
// 		<input type="text" name="tbsp_addr" id="sample4_jibunAddress" placeholder="지번주소">
// 		<span id="guide" name="tbsp_addr" style="color:#999;display:none"></span>
// 		<input type="text" name="tbsp_addr2" id="sample4_detailAddress" placeholder="상세주소">
// 	</div>
// 	<input type="hidden" name="tbh_num" id="tbh_num" value="H0001">
	
// 	<div class="sp_btn_bottom">
// 		<span class="btn_wrap">
// 			<input type="button" class="btn_prev" value="이전">
// 		</span>
// 		<span class="btn_wrap">
// 			<input type="button" class="btn_next" id="saveBtn" value="저장">
// 		</span>
// 	</div>			
	
// 	<input type="hidden" name="tag01" id="tag01" value="">
// 	<input type="hidden" name="tag02" id="tag02" value="">
// 	<input type="hidden" name="tag03" id="tag03" value="">
// 	<input type="hidden" name="tag04" id="tag04" value="">
// 	<input type="hidden" name="tag05" id="tag05" value="">
// 	</form>
// </div>
// </div>

