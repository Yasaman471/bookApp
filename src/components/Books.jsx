import { useState } from "react"
import {books as bookData} from "../constants/mockData.js" 

import BookCard from "./BookCard.jsx"
import SideCards from "./SideCards.jsx"

import Styles from "./Books.module.css"
import SearchBox from "./SearchBox.jsx"

function Books() {

  const [books,setBooks] = useState(bookData)
  const [liked,setLiked] = useState([])
  const [search,setSearch] = useState([])

  const liledListHandler = (status,book) => {
    if(status){
      const newLikedList = liked.filter((i)=>(i.id !== book.id))
      setLiked(newLikedList)
    }else{
      setLiked((liked)=>[...liked,book])
    }
  }

  const searchHandler = () =>{
    if(search){
      const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else {
      setBooks(bookData)
    }
  }

  return (
    <>
    <SearchBox 
    search={search}
    setSearch={setSearch}
    searchHandler={searchHandler}
    />
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
    </>
  )
}

export default Books
