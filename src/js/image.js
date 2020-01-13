import wbImgUrl from "../images/weimob.png"
import styles from "../less/index.less"
function createImg() {
    var img = new Image()

    img.src= wbImgUrl;
    img.classList.add(styles.vatar2)
    var root = document.getElementById("root")

    root.append(img)

}

export default createImg