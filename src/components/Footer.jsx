import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const heart = <FontAwesomeIcon icon={faHeart} style={{ color: "#ed1202" }} />;

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <h1>Foodies</h1>
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>contact</li>
        </ul>
      </div>
      <p>
        © Code Elites <span>{heart}</span>
      </p>
    </footer>
  );
}
export default Footer;
