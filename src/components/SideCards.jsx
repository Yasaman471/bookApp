import Styles from "./SideCards.module.css"
 
function SideCards({data : {image,title}}) {
  return (
    <div className={Styles.container}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default SideCards
