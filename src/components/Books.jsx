import { useState } from "react"
import {books} from "../constants/mockData.js" 

import BookCard from "./BookCard.jsx"
import SideCards from "./SideCards.jsx"

import Styles from "./Books.module.css"

function Books() {

  const [liked,setLiked] = useState([])

  const liledListHandler = (status,book) => {
    if(status){
      const newLikedList = liked.filter((i)=>(i.id !== book.id))
      setLiked(newLikedList)
    }else{
      setLiked((liked)=>[...liked,book])
    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.cards}>
        {books.map(book => (
        <BookCard data={book}
        key={book.id}
        liledListHandler={liledListHandler}
        />
        ))}
      </div>
      {!!liked.length && <div className={Styles.favorites}>
        <h4>Favorites</h4>
        {liked.map(book => <SideCards key={book.id} data={book} />)}
        </div>}
    </div>
  )
}

export default Books
