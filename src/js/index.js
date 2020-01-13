import vatar from "../images/4.jpg"
import styles  from "../less/index.less"
import createImg from "./image"

createImg()

let img= new Image()

img.src = vatar
img.classList.add(styles.vatar)

var root = document.getElementById("root")

root.appendChild(img)

