import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (
	<div className='post '>
		<div className="">
        <a href="#">
			<div className="post_img">
				<img alt="image" />
			</div>
				<div className="sp_info ">
				    <h3 className="sp_info_tit">{post.name}</h3>
						<div className="sp_tags">
							<span className="tag_area_name">{"주소"}</span> 
							<span>{post.tag.tag1}</span>
							<span>{post.tag.tag2}</span>
							<span>{post.tag.tag3}</span>
						</div>
						<div className="sp_info_price_hour">
							<strong className="price">{post.price}</strong> 
							<span className="txt_unit">원/시간</span>
						</div>
						<div className="info_maxUser">
							<img alt="최대이용가능수" src="" /> 
							<span>{post.capacity}</span> 
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