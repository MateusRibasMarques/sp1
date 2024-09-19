import styles from '../Home/Home.module.css'
// import Banner from '../../Images/banner2.webp'

function Home() {
    return (
        <>
              <aside className={styles.container}>
              <p className={styles.p}> NEXTGEN <br /> <span className={styles.sp}>O seu FUTURO    </span> <br /> <button className={styles.bt}>Saiba Mais</button></p>
            </aside>
            <nav className={styles.box}>
                <div className={styles.grid}>
                    <div className={styles.net}>
                        <span className={styles.emoji}>🔗</span>
                        <p><strong>Networking:</strong> Crie e fortaleça conexões profissionais para avançar na sua carreira.</p>
                    </div>
                    <div className={styles.vagas}>
                        <span className={styles.emoji}>💼</span>
                        <p><strong>Vagas:</strong> Encontre oportunidades de emprego que se alinhem com suas habilidades e objetivos.</p>
                    </div>
                    <div className={styles.carreiras}>
                        <span className={styles.emoji}>🎓</span>
                        <p><strong>Carreiras:</strong> Explore caminhos para o desenvolvimento e crescimento profissional.</p>
                    </div>
                    <div className={styles.futuro}>
                        <span className={styles.emoji}>🚀</span>
                        <p><strong>Futuro:</strong> Inove e prepare-se para as tendências emergentes do mercado de trabalho.</p>
                    </div>
                    <div className={styles.events}>
                        <span className={styles.emoji}>📅</span>
                        <p><strong>Eventos:</strong> Participe de eventos e workshops para expandir seus conhecimentos.</p>
                    </div>
                    <div className={styles.life}>
                        <span className={styles.emoji}>❤️</span>
                        <p><strong>Vida:</strong> Equilibre sua vida pessoal e profissional para alcançar o bem-estar.</p>
                    </div>
                </div>
            </nav>
      
           




      
        </>
    )
}

export default Home