import { useState } from "react";
import NavLi from "./NavLi";
import style from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const carticon = <FontAwesomeIcon icon={faCartShopping} />;
const menuIcon = <FontAwesomeIcon icon={faBars} />;
const xIcon = <FontAwesomeIcon icon={faXmark} />;

const navlist =["home","About Us","contact",carticon,"Join Us"]
function NavigationBar({handlePage,navbar}) {
  const [showMenu, setShowMenu] = useState(false);  
  return (
    <nav className={style["nav-bar"]}>
      <h1>Foodies</h1>
      <ul className={!showMenu?style.mobile:""}>
        {navlist.map((data,index)=> <NavLi value={data} handlePage={handlePage} navbar={navbar} key={index}/>)}
      </ul>
      <span className={style.menu} onClick={() => setShowMenu((prev) => !prev)}>
        {!showMenu ? menuIcon : xIcon}
      </span>
    </nav>
  );
}
export default NavigationBar;