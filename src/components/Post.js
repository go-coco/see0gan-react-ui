import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (
    <div className='post'>
        <a href="#">
			<div class="sp_list_img">
				<img src={} alt="image" />
			</div>
				<div class="sp_info">
				    <h3 class="sp_info_tit">{post.name}</h3>
						<div class="sp_tags">
                        <h3></h3>    
							<span class="tag_area_name"><%= sp_BasicInfoVO.getTbsp_addr() %></span> 
							<span><%= sp_BasicInfoVO.getTbsp_tag1() %></span>
							<span><%= sp_BasicInfoVO.getTbsp_tag2() %></span>
							<span><%= sp_BasicInfoVO.getTbsp_tag3() %></span>
						</div>
						<div class="sp_info_price_hour">
							<strong class="price"><%= sp_BasicInfoVO.getTbsp_cost() %></strong> 
							<span class="txt_unit">원/시간</span>
						</div>
						<div class="info_maxUser">
							<img alt="최대이용가능수" src="resources/icon/user.jpg" /> 
							<span><%= sp_BasicInfoVO.getTbsp_capacity() %></span> 
						</div>
					</div>
				</a>
				</div>
    </div>
  )
}

// Post.defaultProps = {

// }

// Post.propTypes = {

// }

export default Post