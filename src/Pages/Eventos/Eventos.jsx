import styles from '../Eventos/Eventos.module.css'

function Eventos (){
    return(
    <>
     <nav className={styles.nav}>
        <div className={styles.temas}><p>Feira de Estágios 2024</p></div>
        <div className={styles.temas}><p>Workshop de Entrevistas</p></div>
        <div className={styles.temas}><p>Palestra de Carreira e Tecnologia</p></div>
        <div className={styles.temas}><p>Networking e Soft Skills</p></div>
        <div className={styles.temas}><p>Empreendedorismo e Startups</p></div>
        <div className={styles.temas}><p>Oportunidades 2024</p></div>
      </nav>

      {/* Sessão principal de eventos */}
      <main className={styles.main}>
  <div className={styles.tema1} style={{ backgroundImage: 'url(https://curriculosvencedores.com.br/wp-content/uploads/2023/11/feira-de-empregos.jpg)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Feira de Estágios 2024</p>
    </div>
  </div>

  <div className={styles.tema1} style={{ backgroundImage: 'url(https://revistaeducacao.com.br/wp-content/uploads/2019/07/workshop-projetos-pedagogicos.jpg)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Workshop de Entrevistas</p>
    </div>
  </div>

  <div className={styles.tema1} style={{ backgroundImage: 'url(https://palestrasdesucesso.com.br/wp-content/uploads/2024/04/palestra-inovacao-700x400.webp)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Palestra de Carreira e Tecnologia</p>
    </div>
  </div>

  <div className={styles.tema1} style={{ backgroundImage: 'url(https://i.pinimg.com/564x/a4/f1/fb/a4f1fb245e73410338911054b6e677e5.jpg)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Networking e Soft Skills</p>
    </div>
  </div>

  <div className={styles.tema1} style={{ backgroundImage: 'url(https://blog.ambra.education/wp-content/uploads/2017/04/Ambra-College-10-04-17-copia-alterada-147570923.jpg)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Empreendedorismo e Startups</p>
    </div>
  </div>

  <div className={styles.tema1} style={{ backgroundImage: 'url(https://mercadoeconsumo.com.br/wp-content/uploads/2023/12/As-oportunidades-de-negocios-em-TI-para-2024-exigirao-uma-abordagem-holistica-do-mercado-shutterstock_2285653331-scaled.jpg)' }}>
    <div className={styles.tema2}>
      <p className={styles.verMais}>Oportunidades 2024</p>
    </div>
  </div>
</main>

    </>
    )
}

export default Eventos;