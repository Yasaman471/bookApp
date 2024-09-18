import Styles from "./Layout.module.css"


function Layout({children}) {
  return (
 <>
 <header className={Styles.header}>
    <h1>Book App</h1>
    <p><a href="https://botostart.ir">Botostart</a> | React.js Full Course</p>
 </header>
    {children}
 <footer className={Styles.footer}>
    <p>Developed by Yasaman with 💗</p>
 </footer>
 </>
  )
}

export default Layout
