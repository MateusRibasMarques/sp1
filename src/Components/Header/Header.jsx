import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import classNames from "classnames";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna o estado entre aberto e fechado
  };

  return (
    <>
      {/* Botão para abrir/fechar o menu */}
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "✕" : "☰"} {/* Ícone muda dependendo do estado */}
      </button>

      {/* Sidebar */}
      <aside className={classNames(styles.sidebar, { [styles.open]: isOpen })}>
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} alt="Logo" />
        </div>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link to="/" className={styles.text}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.text}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className={styles.text}>
                Cadastrar
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;