import {books} from "../constants/mockData.js"
import BookCard from "./BookCard.jsx"

function Books() {
  return (
    <div>
      <div>
        {books.map(book => (
        <BookCard data={book}/>
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default Books
