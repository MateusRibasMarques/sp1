import styles from "./googlelogin.module.css"; 

function Googlelogin() {
    return (
        <button className={styles.buttonicon}>
            <div className={styles.iconGoogle}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
            </div>
            <span>Entrar com Google</span>
        </button>
    )
}

export default Googlelogin;
