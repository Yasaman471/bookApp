import { IoSearch } from "react-icons/io5";

import Styles from "./SearchBox.module.css"

function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div className={Styles.search}>
      <input type="text"
      placeholder="Search Title"
      value={search}
      onChange={e=>setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}><IoSearch /></button>
    </div>
  )
}

export default SearchBox
