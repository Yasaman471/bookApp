import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import Styles from "./BookCard.module.css"

function BookCard({data : {author,image,language,pages,title}}) {

  const [like,setLike] = useState(false)


  const likeHandler = ()=>{
    setLike(like=>!like)
  }

  return (
    <div className={Styles.card}>
        <img src={image} alt={title} />
        <div className={Styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>
        </div>
        <button onClick={likeHandler}>
        <FaHeart color = {like ? "red" : " #e0e0e0 " } fontSize="1.8rem"/>
        </button>
    </div>
  )
}

export default BookCard
