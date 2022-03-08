import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Post from './Post'

const Posts = ({posts}) => {

  // const naviate = useNavigate();
  //const [loading, setloading] = useState(second);
  // const [spaces, setSpaces] = useState(

  // );

  return (
    <>
  
    {posts.map((space) => (
      <Post key={space.id} post={space}/>
    ))}
    </>
    // <div className="w-8 m-auto min-h-630">
	  // <div class="main_wrap"></div>
    // <h2>오늘의 추천 공간</h2>
    // <h3>뜨기 전에 먼저 예약하세요</h3>
    // <div className=""></div>
    // </div>
  )
}

export default Posts